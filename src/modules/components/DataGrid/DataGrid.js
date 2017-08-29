import _ from 'underscore';
import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Pagination } from 'react-bootstrap';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import MultiGrid from 'react-virtualized/dist/commonjs/MultiGrid';
import CellMeasurer from 'react-virtualized/dist/commonjs/CellMeasurer';
import SortDirection from 'react-virtualized/dist/commonjs/Table/SortDirection';
import CellMeasurerCache from 'react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache';

class DataGrid extends Component {
  static emptyRenderer() {
    return <div className="no-rows">No rows</div>;
  }

  static _formatDateWithString(date, string) {
    const toParse = isNaN(date) ? date : Number(date);
    let tryFormat;
    if (typeof toParse === 'number') {
      tryFormat = moment.unix(toParse).format(string);
    } else {
      tryFormat = moment(toParse).format(string);
    }

    if (tryFormat === 'Invalid date') {
      return date;
    }

    return tryFormat;
  }

  static formatData(column, data) {
    if (_.isFunction(column.formatter)) {
      return column.formatter(data);
    }

    let myData = null;
    if (column.key.indexOf('.') > -1) {
      const split = column.key.split('.');
      if (split.length < 2) {
        return;
      }

      myData = data[split[0]] ? data[split[0]][split[1]] : '';
    } else {
      myData = data[column.key];
    }

    return DataGrid.formatValue(myData, column.type);
  }

  static formatValue(value, type) {
    switch (type) {
      case 'date':
        return DataGrid._formatDateWithString(value, 'M/D/YYYY');
      case 'dateTime':
        return DataGrid._formatDateWithString(value, 'M/D/YYYY HH:mm');
      case 'array':
        return (
          <ul>
            {value.map(item =>
              <li key={item}>
                {item}
              </li>
            )}
          </ul>
        );
      default:
        return value;
    }
  }

  constructor(props) {
    super(props);

    this.cellSizeCache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 45
      // minHeight: browser.lessThan.small ? 40 : 50,
    });

    this.state = {
      focusCol: null,
      hoveredColumnIndex: null,
      hoveredRowIndex: null,

      sortBy: 'name',
      sortDirection: SortDirection.ASC,

      filters: {},
      filterOpened: false,
      scrolledAllLeft: true
    };

    // stores the inputs
    this.filters = {};

    this.needsRefresh = false;

    this.renderMultiGrid = this.renderMultiGrid.bind(this);
    this.onGridScroll = this.onGridScroll.bind(this);
    this.renderCell = this.renderCell.bind(this);
    this.getColumnWidth = this.getColumnWidth.bind(this);
    this.getRowHeight = this.getRowHeight.bind(this);
    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  componentDidMount() {
    const { defaultSort } = this.props;
    this.componentDidUpdate();

    if (!this.mainGrid) {
      return;
    }

    if (defaultSort) {
      if (
        _.isString(defaultSort.sortDirection) &&
        defaultSort.sortDirection.toLowerCase() === 'asc'
      ) {
        defaultSort.sortDirection = SortDirection.ASC;
      } else if (
        _.isString(defaultSort.sortDirection) &&
        defaultSort.sortDirection.toLowerCase() === 'desc'
      ) {
        defaultSort.sortDirection = SortDirection.DESC;
      }

      this.setTableSort(defaultSort);
    }

    setTimeout(() => {
      this._refreshGridSize();
    }, 1);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.mainGrid || !this.mainGrid._bottomRightGrid) {
      return;
    }

    const containerWidth = this.mainGrid._containerBottomStyle.width;
    const contentWidth =
      this.mainGrid._leftGridWidth +
      this.mainGrid._bottomRightGrid._scrollingContainer.scrollWidth;

    if (containerWidth === contentWidth) {
      this.setState({ scrolledAllLeft: true, scrolledAllRight: true });
    }

    if (!_.isEqual(nextProps.items, this.props.items)) {
      this.needsRefresh = true;
      if (!this.mainGrid) return;
      this.mainGrid.invalidateCellSizeAfterRender();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.focusCol && this.state.focusCol === nextState.focusCol) {
      this.setState({ focusCol: null });
    }
  }

  componentDidUpdate() {
    if (!this.mainGrid) {
      return;
    }

    if (this.state.focusCol !== null) {
      setTimeout(() => {
        if (!this.filters[this.state.focusCol]) {
          return;
        }

        this.filters[this.state.focusCol].focus();
      }, 200);
    }

    if (this.needsRefresh) {
      console.log('needs refresh size');
      this._refreshGridSize();
      this.needsRefresh = false;
    }
  }

  _refreshGridSize() {
    if (!this.mainGrid) {
      return;
    }
    console.log('refreshing size', this.getRowCount());
    this.cellSizeCache.clearAll();
    this.mainGrid.measureAllCells();
    console.log('forcuing update grids');
    this.mainGrid.forceUpdateGrids();
  }

  onFilterClicked(colKey) {
    this.setState(
      {
        filterOpened: !this.state.filterOpened,
        focusCol: this.state.filterOpened ? null : colKey
      },
      () => {
        if (!this.mainGrid) return;
        console.log('forcuing update grids');
        this.mainGrid.forceUpdateGrids();
      }
    );
    // prevent bubbling to the header
    return false;
  }

  onFilterChanged(filterObj) {
    const newFilters = {
      ...this.state.filters,
      [filterObj.key]: filterObj
    };

    this.setState({ ...this.state, filters: newFilters }, () => {
      // if this is a paged table, we need to notify that the filter has changed so the data can be
      // refreshed
      if (this.props.paged) {
        this.props.onUpdateDataNeeded({ filter: newFilters });
      }

      if (!this.props.paged) {
        this._refreshGridSize();
      }
    });
  }

  getColumnCount() {
    return this.getColumns().length;
  }

  getRowCount() {
    const length = this.getRows().length;
    return this.props.paged
      ? Math.min(length, this.props.pageSize + 1)
      : length;
  }

  /**
   * Gets the columns to render in our table
   * @return {[Object]} array of column objects
   */
  getColumns() {
    return this.props.columns;
  }

  getColumn(index) {
    // adds defaults to the column
    return _.defaults(this.getColumns()[index], {
      sortable: true,
      filterable: true
    });
  }

  /**
   * Gets the rows of data to render in our table
   * @param  {Number} [index=-1] passing an index >= 0 will return a single object rather than the entire array
   * @return {[Object]} Array of objects with unknown shapes
   * @return {Object} Single object when index >=0
   */
  getRows(index = -1) {
    const { items, paged } = this.props;

    if (!items || !items.length) {
      return [];
    }

    // if we have a paged table, we don't need to do the filtering or sorting internally
    const filtered = paged ? items : this._filterRows(items);
    const sorted = paged ? filtered : this._sortRows(filtered);

    // get the name of each column into an array
    const colNames = {};
    this.getColumns().forEach(col => {
      colNames[col.key] = col.name;
    });

    // put the header as column one, and the rest after
    const dataSet = [colNames, ...sorted];

    return index < 0 ? dataSet : dataSet[index];
  }

  // For now, sizing columns based on the type
  getColumnWidth(index) {
    const { columns, columnWidthMultiplier } = this.props;
    const { type, width } = columns[index.index];

    // if its the last column, and the table doesn't take up all the space, the last column should fill

    if (typeof width === 'number') {
      return width;
    }

    switch (type) {
      case 'text':
      case 'list':
        return columnWidthMultiplier * 300;
      case 'date':
        return columnWidthMultiplier * 150;
      case 'checkbox':
        return columnWidthMultiplier * 150;
      default:
        return columnWidthMultiplier * 200;
    }
  }

  getRowHeight(index) {
    return this.cellSizeCache.rowHeight(index);
  }

  _filterRows(items) {
    const filters = this.state.filters;
    if (filters === {}) {
      return items;
    }

    const filterItem = (result, item, filterKey) => {
      const filterObj = filters[filterKey];
      const filterCol = _.findWhere(this.getColumns(), { key: filterKey });
      const filterVal = filterObj.value.toLowerCase();

      if (!filterVal) {
        return;
      }

      const checkAgainst = DataGrid.formatData(filterCol, item);

      if (!checkAgainst) {
        result.keep = false;
        return;
      }

      const itemVal = checkAgainst.toLowerCase();

      if (itemVal && itemVal.indexOf(filterVal) < 0) {
        result.keep = false;
      }
    };

    return items.filter(item => {
      let result = { keep: true };

      Object.keys(filters).forEach(filterItem.bind(null, result, item));

      return result.keep;
    });
  }

  _sortRows(items) {
    const { sortBy, sortDirection } = this.state;
    const sortCol = _.findWhere(this.getColumns(), { key: sortBy });

    // trying to sort by a column that is not part of this table
    if (!sortCol) {
      return items;
    }
    return items.sort((a, b) => {
      const aVal = DataGrid.formatData(sortCol, a);
      const bVal = DataGrid.formatData(sortCol, b);
      if (typeof aVal === 'undefined') {
        return 1;
      }

      if (typeof bVal === 'undefined') {
        return -1;
      }

      if (aVal < bVal) {
        return sortDirection === SortDirection.ASC ? -1 : 1;
      }

      if (aVal > bVal) {
        return sortDirection === SortDirection.ASC ? 1 : -1;
      }

      return 0;
    });
  }

  setTableSort({ sortBy, sortDirection }) {
    if (!sortBy) {
      throw new Error('setTableSort requires sortBy option');
    }

    if (!sortDirection) {
      throw new Error('setTableSort requires sortDirection option');
    }

    this.setState({ ...this.state, sortBy, sortDirection }, () => {
      this._refreshGridSize();
    });
  }

  onGridScroll(scrollInfo) {
    const { scrollLeft, clientWidth, scrollWidth } = scrollInfo;

    const scrolledAllRight = scrollLeft + clientWidth >= scrollWidth;
    const scrolledAllLeft = scrollLeft === 0;

    const updateObj = {};
    if (scrolledAllRight !== this.state.scrolledAllRight) {
      updateObj.scrolledAllRight = scrolledAllRight;
    }

    if (scrolledAllLeft !== this.state.scrolledAllLeft) {
      updateObj.scrolledAllLeft = scrolledAllLeft;
    }

    if (updateObj !== {}) {
      this.setState(updateObj, () => {
        if (!this.mainGrid) return;
        console.log('forcuing update grids');
        this.mainGrid.forceUpdateGrids();
      });
    }

    this.props.onScroll(scrollInfo);
  }

  renderMultiGrid({ width, height }) {
    const { fixedColumns } = this.props;
    const boxShadow = this.state.scrolledAllLeft
      ? false
      : '1px 3px 3px #a2a2a2';
    const colCount = this.getColumnCount();
    const rowCount = this.getRowCount();

    if (rowCount < 2) {
      return DataGrid.emptyRenderer();
    }

    console.log('rendering grid');

    return (
      <MultiGrid
        cellRenderer={this.renderCell}
        columnCount={colCount}
        columnWidth={this.getColumnWidth}
        fixedColumnCount={colCount < 2 ? 0 : Math.min(fixedColumns, colCount)}
        height={height}
        rowHeight={this.getRowHeight}
        rowCount={rowCount}
        fixedRowCount={1}
        deferredMeasurementCache={this.cellSizeCache}
        noRowsRenderer={DataGrid.emptyRenderer}
        width={width}
        onScroll={this.onGridScroll}
        className={classNames('data-grid', {
          'scrolled-left': this.state.scrolledAllLeft
        })}
        styleBottomLeftGrid={{ boxShadow }}
        ref={grid => {
          this.mainGrid = grid;
        }}
      />
    );
  }

  renderCell({ columnIndex, rowIndex, style, parent }) {
    console.log('rendering cell');
    if (rowIndex === 1 && columnIndex === 0) {
      // console.trace();
    }
    const { onRowClicked } = this.props;
    const data = this.getRows(rowIndex);

    if (!data) {
      return null;
    }

    const column = this.getColumn(columnIndex);
    if (!column) return '';

    const { sortBy, sortDirection } = this.state;
    const filter = this.state.filters[column.key];

    return (
      <CellMeasurer
        cache={this.cellSizeCache}
        columnIndex={columnIndex}
        key={`${columnIndex},${rowIndex}`}
        parent={parent}
        rowIndex={rowIndex}
        ref={cellMeasurer => {
          this.cellMeasurer = cellMeasurer;
        }}
      >
        <div
          style={{
            ...style,
            minHeight: 45,
            maxWidth: 1000,
            width: this.getColumnWidth({ index: columnIndex })
          }}
          className={classNames({
            'grid-header-cell': rowIndex === 0,
            'grid-header-filterable': column.filterable,
            'grid-cell': rowIndex > 0,
            'grid-row-even': rowIndex % 2 === 0,
            'first-col': columnIndex === 0,
            'last-col': columnIndex === this.getColumnCount(),
            'grid-cell-filter': rowIndex === 0 && this.state.filterOpened,
            'grid-cell-sort': rowIndex === 0 && sortBy === column.key,
            'grid-row-hovered': rowIndex === this.state.hoveredRowIndex,
            'grid-column-hovered': columnIndex === this.state.hoveredColumnIndex
          })}
          onMouseOver={() => {
            this.setState(
              {
                hoveredColumnIndex: columnIndex,
                hoveredRowIndex: rowIndex
              },
              () => {
                if (!this.mainGrid) return;
                console.log('forcuing update grids');
                this.mainGrid.forceUpdateGrids();
              }
            );
          }}
          onClick={() => {
            if (rowIndex === 0 && sortBy === column.key && column.sortable) {
              this.setTableSort({
                sortBy: column.key,
                sortDirection:
                  sortDirection === SortDirection.ASC
                    ? SortDirection.DESC
                    : SortDirection.ASC
              });
            } else if (rowIndex === 0 && column.sortable) {
              this.setTableSort({
                sortBy: column.key,
                sortDirection: SortDirection.ASC
              });
            } else if (rowIndex !== 0) {
              onRowClicked(data);
            }
          }}
        >
          {rowIndex === 0 &&
            sortBy === column.key &&
            <span className="grid-sort-indicator">
              <i
                className={classNames('fa', {
                  'fa-sort-asc': sortDirection === SortDirection.ASC,
                  'fa-sort-desc': sortDirection === SortDirection.DESC
                })}
              />
            </span>}
          <div className="grid-cell-data">
            {rowIndex === 0
              ? data[column.key]
              : DataGrid.formatData(column, data)}
          </div>
          {rowIndex === 0 &&
            column.filterable &&
            <input
              type="text"
              className="filter-input"
              onClick={e => {
                // when we click on the input we need to prevent sorting
                e.stopPropagation();
              }}
              ref={input => {
                this.filters[column.key] = input;
              }}
              value={filter && filter.value ? filter.value : ''}
              onChange={e => {
                const filterObj = {
                  key: column.key,
                  value: e.target.value
                };

                this.onFilterChanged(filterObj);
              }}
            />}
          {rowIndex === 0 &&
            column.filterable &&
            <a
              className={classNames('grid-filter-indicator', {
                active: filter && filter.value
              })}
              tabIndex={columnIndex}
              onClick={e => {
                e.stopPropagation();
                this.onFilterClicked(column.key);
              }}
            >
              <i className="fa fa-filter fa-fw" />
            </a>}
        </div>
      </CellMeasurer>
    );
  }

  render() {
    const { paged, currentPage } = this.props;

    return (
      <div className="grid-container">
        <div className="grid-content">
          <AutoSizer
            {...this.props.gridProps}
            needsRefresh={this.needsRefresh}
            currentPage={currentPage}
          >
            {this.renderMultiGrid}
          </AutoSizer>
        </div>
        {paged && this._renderFooter()}
        <div
          className={classNames('scroll-x-indicator', {
            faded: this.state.scrolledAllRight
          })}
        >
          <i className="fa fa-fw fa-angle-double-right" />
        </div>
      </div>
    );
  }

  _renderFooter() {
    const {
      pageSize,
      totalItemCount,
      currentPage,
      onUpdateDataNeeded
    } = this.props;

    const showing = Math.min(
      totalItemCount,
      (currentPage - 1) * pageSize + pageSize
    );
    return (
      <div className="grid-footer">
        <div className="paginator">
          <div className="paginator-label">
            <em>
              Showing {(currentPage - 1) * pageSize + 1} - {showing} of{' '}
              {totalItemCount}
            </em>
          </div>
          <Pagination
            bsSize="sm"
            items={Math.ceil(1.0 * totalItemCount / pageSize)}
            activePage={currentPage}
            onSelect={eventKey => {
              onUpdateDataNeeded({ page: eventKey });
            }}
            prev
            next
          />
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClicked: PropTypes.func,
  onScroll: PropTypes.func,
  gridProps: PropTypes.shape(),
  defaultSort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string
  }),
  columnWidthMultiplier: PropTypes.number,
  fixedColumns: PropTypes.number,

  // paging props follow
  paged: PropTypes.bool,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItemCount: PropTypes.number,
  onUpdateDataNeeded: PropTypes.func
};

DataGrid.defaultProps = {
  title: '',
  count: 0,
  fixedColumns: 1,
  defaultSort: null,
  columnWidthMultiplier: 1,
  onPageChange: () => {},
  onScroll: () => {},
  onRowClicked: () => {},

  // paging props follow
  paged: false,
  pageSize: 50,
  currentPage: 1,
  totalItemCount: 0,
  onUpdateDataNeeded: () => {}
};

export default DataGrid;
