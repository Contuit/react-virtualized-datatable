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

  static sortRows(items, columns, { sortBy, sortDirection }) {
    const sortCol = _.findWhere(columns, { key: sortBy });

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

  static _formatDateWithString(date, string) {
    const toParse = isNaN(date) ? date : Number(date);
    let tryFormat;

    if (typeof toParse === 'number') {
      tryFormat =
        // hacky way to check if millisecond timestamp or seconds
        toParse > 99999999999
          ? moment(toParse).format(string)
          : moment.unix(toParse).format(string);
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
        return <ul>{value.map(item => <li key={item}>{item}</li>)}</ul>;
      default:
        return value;
    }
  }

  constructor(props) {
    super(props);

    const measureOptions = props.measureAll
      ? { defaultHeight: 45, defaultWidth: 300 }
      : {
          fixedWidth: true,
          defaultHeight: 45
          // minHeight: browser.lessThan.small ? 40 : 50,
        };

    this.cellSizeCache = new CellMeasurerCache(measureOptions);

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

    // throttle filter changing, ignore leading edge
    this.callDataUpdate = _.throttle(this.callDataUpdate.bind(this), 750, {
      leading: false
    });
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
      this.cellSizeCache._rowCount = 0;
      this.cellSizeCache._columnCount = 0;
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
      this._refreshGridSize();
      this.needsRefresh = false;
    }
  }

  _refreshGridSize() {
    if (!this.mainGrid) {
      return;
    }

    this.cellSizeCache.clearAll();
    this.mainGrid.measureAllCells();
    // this.mainGrid.invalidateCellSizeAfterRender();
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
        this.mainGrid.forceUpdateGrids();
      }
    );
    // prevent bubbling to the header
    return false;
  }

  callDataUpdate(options) {
    this.props.onUpdateDataNeeded(options);
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
        this.callDataUpdate({ filter: newFilters });
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

    // get the name of each column into an array
    const colNames = {};
    this.getColumns().forEach(col => {
      colNames[col.key] = col.name;
    });

    if (!items || !items.length) {
      const emptyRow = {};
      _.each(colNames, (value, key) => {
        emptyRow[key] = ' ';
      });

      const tempDataSet = [colNames, emptyRow];

      return index < 0 ? tempDataSet : tempDataSet[index];
    }

    // if we have a paged table, we don't need to do the filtering or sorting internally
    const filtered = paged ? items : this._filterRows(items);
    const sorted = paged ? filtered : this._sortRows(filtered);

    // put the header as column one, and the rest after
    const dataSet = [colNames, ...sorted];

    return index < 0 ? dataSet : dataSet[index];
  }

  // For now, sizing columns based on the type
  getColumnWidth(index) {
    const { columns, columnWidthMultiplier, measureAll } = this.props;
    const { type, width } = columns[index.index];

    if (measureAll) {
      return this.cellSizeCache.columnWidth(index) + 20;
    }

    let newWidth = columnWidthMultiplier * 200;
    if (typeof width === 'number') {
      newWidth = width;
    } else {
      switch (type) {
        case 'text':
        case 'list':
          newWidth = columnWidthMultiplier * 300;
          break;
        case 'date':
          newWidth = columnWidthMultiplier * 150;
          break;
        case 'checkbox':
          newWidth = columnWidthMultiplier * 150;
          break;
        default:
          newWidth = columnWidthMultiplier * 200;
          break;
      }
    }

    // if its the last column, and the table doesn't take up all the space, the last column should fill
    // if (index.index === columns.length - 1) {
    //   let sum = newWidth;
    //   for (let i = 0; i < index; i++) {
    //     sum += this.getColumnWidth(i);
    //   }
    //
    //   if (this.container && sum < this.container.offsetWidth) {
    //     newWidth = this.container.offsetWidth - sum;
    //   }
    // }

    return newWidth;
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
    return DataGrid.sortRows(items, this.getColumns(), {
      sortBy,
      sortDirection
    });
  }

  setTableSort({ sortBy, sortDirection }, callback) {
    if (!sortBy) {
      throw new Error('setTableSort requires sortBy option');
    }

    if (!sortDirection) {
      throw new Error('setTableSort requires sortDirection option');
    }

    this.setState({ ...this.state, sortBy, sortDirection }, () => {
      if (_.isFunction(callback)) {
        callback();
      }

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

    // if (rowCount < 2) {
    //   return DataGrid.emptyRenderer();
    // }

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
        enableFixedColumnScroll
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

  _onSortChanged(column) {
    const { paged, onUpdateDataNeeded } = this.props;
    const { sortBy, sortDirection } = this.state;
    // discard non-sortable columns
    if (!column.sortable) {
      return;
    }

    let newSortObj = {};
    if (sortBy === column.key && column.sortable) {
      // clicking the header that is currently sorted invokes sorting in the opposite direction
      newSortObj.sortBy = column.key;
      newSortObj.sortDirection =
        sortDirection === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.ASC;
    } else if (column.sortable) {
      // clicking other headers that are sortable will switch sorting to them, and default to ascending order
      newSortObj.sortBy = column.key;
      newSortObj.sortDirection = SortDirection.ASC;
    }

    this.setTableSort(newSortObj, () => {
      if (paged) {
        onUpdateDataNeeded({ sort: newSortObj });
      }
    });
  }

  renderCell({ columnIndex, rowIndex, style, parent }) {
    const { onRowClicked } = this.props;
    const data = this.getRows(rowIndex);

    if (!data) {
      return null;
    }

    const column = this.getColumn(columnIndex);
    if (!column) return '';

    const { sortBy, sortDirection } = this.state;
    const filter = this.state.filters[column.key];

    const rowIsHeader = rowIndex === 0;
    const cellStyles = {
      ...style
    };

    if (rowIsHeader) {
      cellStyles.minHeight = 45;
    }

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
          style={cellStyles}
          className={classNames({
            'grid-cell': !rowIsHeader,
            'grid-header-cell': rowIsHeader,
            'grid-header-filterable': column.filterable,
            'grid-row-even': rowIndex % 2 === 0,
            'first-col': columnIndex === 0,
            'last-col': columnIndex === this.getColumnCount(),
            'grid-cell-filter': rowIsHeader && this.state.filterOpened,
            'grid-cell-sort': rowIsHeader && sortBy === column.key,
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
                this.mainGrid.forceUpdateGrids();
              }
            );
          }}
          onClick={() => {
            if (rowIsHeader) {
              this._onSortChanged(column);
            } else {
              // delegate to onRowClicked prop
              onRowClicked(data);
            }
          }}
        >
          {rowIsHeader &&
            sortBy === column.key && (
              <span className="grid-sort-indicator">
                <i
                  className={classNames('fa', {
                    'fa-sort-asc': sortDirection === SortDirection.ASC,
                    'fa-sort-desc': sortDirection === SortDirection.DESC
                  })}
                />
              </span>
            )}
          <div className="grid-cell-data">
            {rowIsHeader ? data[column.key] : DataGrid.formatData(column, data)}
          </div>
          {/* Filter input */}
          {rowIsHeader &&
            column.filterable && (
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
              />
            )}
          {/* Filter indicator */}
          {rowIsHeader &&
            column.filterable && (
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
              </a>
            )}
        </div>
      </CellMeasurer>
    );
  }

  render() {
    const { paged, currentPage } = this.props;
    const filter = this.state.filters;

    return (
      <div
        className="grid-container"
        ref={container => {
          this.container = container;
        }}
      >
        <div className="grid-content">
          <AutoSizer
            {...this.props.gridProps}
            needsRefresh={this.needsRefresh}
            currentPage={currentPage}
            filter={filter}
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
            maxButtons={4}
            ellipsis
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

  measureAll: PropTypes.bool,

  // paging props follow
  paged: PropTypes.bool,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItemCount: PropTypes.number,
  onUpdateDataNeeded: PropTypes.func
};

DataGrid.defaultProps = {
  title: '',
  fixedColumns: 1,
  defaultSort: null,
  columnWidthMultiplier: 1,
  onPageChange: () => {},
  onScroll: () => {},
  onRowClicked: () => {},
  measureAll: false,

  // paging props follow
  paged: false,
  pageSize: 50,
  currentPage: 1,
  totalItemCount: 0,
  onUpdateDataNeeded: () => {}
};

export default DataGrid;
