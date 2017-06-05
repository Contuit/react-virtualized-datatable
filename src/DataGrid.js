import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AutoSizer,
  MultiGrid,
  // CellMeasurer,
  SortDirection,
  // CellMeasurerCache,
} from 'react-virtualized';
import './App.css';

class DataGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusCol: null,
      hoveredColumnIndex: null,
      hoveredRowIndex: null,

      sortBy: 'name',
      sortDirection: SortDirection.ASC,

      filters: {},
      filterOpened: false,
    };

    this.renderMultiGrid = this.renderMultiGrid.bind(this);
    this.onGridScroll = this.onGridScroll.bind(this);
  }

  getColumnCount() {
    return this.getColumns().length;
  }

  getRowCount() {
    return this.getRows().length;
  }

  /**
   * Gets the columns to render in our table
   * @return {[Object]} array of column objects
   */
  getColumns() {
    return this.props.columns;
  }

  /**
   * Gets the rows of data to render in our table
   * @param  {Number} [index=-1] passing an index >= 0 will return a single object rather than the entire array
   * @return {[Object]} Array of objects with unknown shapes
   * @return {Object} Single object when index >=0
   */
  getRows(index = -1) {
    const { items } = this.props;

    if (!items || !items.length) {
      return [];
    }

    const sorted = this._sortRows(this._filterRows(items));

    // get the name of each column into an array
    const colNames = {};
    this.getColumns().forEach((col) => {
      colNames[col.key] = col.name;
    });

    // put the header as column one, and the rest after
    const dataSet = [colNames, ...sorted];

    return index < 0 ? dataSet : dataSet[index];
  }

  _filterRows(items) {
    const filters = this.state.filters;
    if (filters === {}) {
      return items;
    }

    const filterItem = (keep, item, filterKey) => {
      const filterObj = filters[filterKey];
      const filterVal = filterObj.value.toLowerCase();

      if (!filterVal) {
        return;
      }

      if (!item[filterObj.key]) {
        keep = false;
        return;
      }

      const itemVal = item[filterObj.key] &&
                      item[filterObj.key].toLowerCase();

      if (itemVal && itemVal.indexOf(filterVal) < 0) {
        keep = false;
      }
    };

    return items.filter((item) => {
      let keep = true;

      Object.keys(filters).forEach(filterItem.bind(null, keep, item));

      return keep;
    });
  }

  _sortRows(items) {
    const { sortBy, sortDirection } = this.state;
    return items.sort((a, b) => {
      if (typeof a[sortBy] === 'undefined') {
        return 1;
      }

      if (typeof b[sortBy] === 'undefined') {
        return -1;
      }

      if (a[sortBy] < b[sortBy]) {
        return sortDirection === SortDirection.ASC ? -1 : 1;
      }

      if (a[sortBy] > b[sortBy]) {
        return sortDirection === SortDirection.ASC ? 1 : -1;
      }

      return 0;
    });
  }

  setTableSort() {
    // TODO: set correct state???
    this.setState();
  }

  setTableFilter() {
    // TODO: update filter in the state
    this.setState();
  }

  onGridScroll(scrollInfo) {
    const {
      scrollLeft,
      clientWidth,
      scrollWidth,
    } = scrollInfo;

    const scrolledAllRight =
      (scrollLeft + clientWidth >= scrollWidth);
    const scrolledAllLeft = scrollLeft === 0;

    const updateObj = {};
    if (scrolledAllRight !== this.state.scrolledAllRight) {
      updateObj.scrolledAllRight = scrolledAllRight;
    }

    if (scrolledAllLeft !== this.state.scrolledAllLeft) {
      updateObj.scrolledAllLeft = scrolledAllLeft;
    }

    if (updateObj !== {}) {
      this.setState(updateObj);
    }

    this.props.onScroll(scrollInfo);
  }

  renderMultiGrid({ width, height }) {
    const boxShadow = this.state.scrolledAllLeft ?
      false : '1px 3px 3px #a2a2a2';
    return (
      <div className="grid-container">
        <MultiGrid
          cellRenderer={this.cellRenderer}
          columnCount={this.getColumnCount()}
          columnWidth={this.getColumnWidth}
          fixedColumnCount={this.getColumnCount() < 2 ? 0 : 1}
          height={height}
          rowHeight={this.getRowHeight}
          rowCount={this.getRowCount()}
          fixedRowCount={1}
          deferredMeasurementCache={this.cellSizeCache}
          noRowsRenderer={DataGrid.emptyRenderer}
          width={width}
          onScroll={this.onGridScroll}
          className={classNames('data-grid', {
            'scrolled-left': this.state.scrolledAllLeft,
          })}
          styleBottomLeftGrid={{ boxShadow }}
          ref={(grid) => { this.mainGrid = grid; }}
        />
        <div
          className={classNames('scroll-x-indicator', {
            faded: this.state.scrolledAllRight,
          })}
        >
          <i className="fa fa-fw fa-angle-double-right" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <AutoSizer>
        {this.renderMultiGrid}
      </AutoSizer>
    );
  }
}

DataGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClicked: PropTypes.func,
  onScroll: PropTypes.func,
  defaultSort: PropTypes.shape({
    sortBy: PropTypes.string,
    sortDirection: PropTypes.string,
  }),


  columnWidthMultiplier: PropTypes.number,
};

DataGrid.defaultProps = {
  title: '',
  count: 0,
  defaultSort: null,
  columnWidthMultiplier: 1,
  onPageChange: () => {},
  onScroll: () => {},
  onRowClicked: () => {},
};

export default DataGrid;
