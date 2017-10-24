"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrap = require("react-bootstrap");

var _AutoSizer = require("react-virtualized/dist/commonjs/AutoSizer");

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _MultiGrid = require("react-virtualized/dist/commonjs/MultiGrid");

var _MultiGrid2 = _interopRequireDefault(_MultiGrid);

var _CellMeasurer = require("react-virtualized/dist/commonjs/CellMeasurer");

var _CellMeasurer2 = _interopRequireDefault(_CellMeasurer);

var _SortDirection = require("react-virtualized/dist/commonjs/Table/SortDirection");

var _SortDirection2 = _interopRequireDefault(_SortDirection);

var _CellMeasurerCache = require("react-virtualized/dist/commonjs/CellMeasurer/CellMeasurerCache");

var _CellMeasurerCache2 = _interopRequireDefault(_CellMeasurerCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataGrid = function (_Component) {
  _inherits(DataGrid, _Component);

  _createClass(DataGrid, null, [{
    key: "emptyRenderer",
    value: function emptyRenderer() {
      return _react2.default.createElement(
        "div",
        { className: "no-rows" },
        "No rows"
      );
    }
  }, {
    key: "sortRows",
    value: function sortRows(items, columns, _ref) {
      var sortBy = _ref.sortBy,
          sortDirection = _ref.sortDirection;

      var sortCol = _underscore2.default.findWhere(columns, { key: sortBy });

      // trying to sort by a column that is not part of this table
      if (!sortCol) {
        return items;
      }
      return items.sort(function (a, b) {
        var aVal = DataGrid.formatData(sortCol, a);
        var bVal = DataGrid.formatData(sortCol, b);
        if (typeof aVal === "undefined") {
          return 1;
        }

        if (typeof bVal === "undefined") {
          return -1;
        }

        if (aVal < bVal) {
          return sortDirection === _SortDirection2.default.ASC ? -1 : 1;
        }

        if (aVal > bVal) {
          return sortDirection === _SortDirection2.default.ASC ? 1 : -1;
        }

        return 0;
      });
    }
  }, {
    key: "_formatDateWithString",
    value: function _formatDateWithString(date, string) {
      var toParse = isNaN(date) ? date : Number(date);
      var tryFormat = void 0;

      if (typeof toParse === "number") {
        tryFormat =
        // hacky way to check if millisecond timestamp or seconds
        toParse > 99999999999 ? (0, _moment2.default)(toParse).format(string) : _moment2.default.unix(toParse).format(string);
      } else {
        tryFormat = (0, _moment2.default)(toParse).format(string);
      }

      if (tryFormat === "Invalid date") {
        return date;
      }

      return tryFormat;
    }
  }, {
    key: "formatData",
    value: function formatData(column, data) {
      if (_underscore2.default.isFunction(column.formatter)) {
        return column.formatter(data);
      }

      var myData = null;
      if (column.key.indexOf(".") > -1) {
        var split = column.key.split(".");
        if (split.length < 2) {
          return;
        }

        myData = data[split[0]] ? data[split[0]][split[1]] : "";
      } else {
        myData = data[column.key];
      }

      return DataGrid.formatValue(myData, column.type);
    }
  }, {
    key: "formatValue",
    value: function formatValue(value, type) {
      switch (type) {
        case "date":
          return DataGrid._formatDateWithString(value, "M/D/YYYY");
        case "dateTime":
          return DataGrid._formatDateWithString(value, "M/D/YYYY HH:mm");
        case "array":
          return _react2.default.createElement(
            "ul",
            null,
            value.map(function (item) {
              return _react2.default.createElement(
                "li",
                { key: item },
                item
              );
            })
          );
        default:
          return value;
      }
    }
  }]);

  function DataGrid(props) {
    _classCallCheck(this, DataGrid);

    var _this = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, props));

    var measureOptions = props.measureAll ? { defaultHeight: 45, defaultWidth: 300 } : {
      fixedWidth: true,
      defaultHeight: 45
      // minHeight: browser.lessThan.small ? 40 : 50,
    };

    _this.cellSizeCache = new _CellMeasurerCache2.default(measureOptions);

    _this.state = {
      focusCol: null,
      hoveredColumnIndex: null,
      hoveredRowIndex: null,

      sortBy: "name",
      sortDirection: _SortDirection2.default.ASC,

      filters: {},
      filterOpened: false,
      scrolledAllLeft: true,

      needsRefresh: false
    };

    // stores the inputs
    _this.filters = {};

    _this.renderMultiGrid = _this.renderMultiGrid.bind(_this);
    _this.onGridScroll = _this.onGridScroll.bind(_this);
    _this.renderCell = _this.renderCell.bind(_this);
    _this.getColumnWidth = _this.getColumnWidth.bind(_this);
    _this.getRowHeight = _this.getRowHeight.bind(_this);
    _this.onFilterChanged = _this.onFilterChanged.bind(_this);

    // throttle filter changing
    _this.callDataUpdate = _underscore2.default.throttle(_this.callDataUpdate.bind(_this), 750, {
      leading: true
    });
    return _this;
  }

  _createClass(DataGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var defaultSort = this.props.defaultSort;

      this.componentDidUpdate();

      if (!this.mainGrid) {
        return;
      }

      if (defaultSort) {
        if (_underscore2.default.isString(defaultSort.sortDirection) && defaultSort.sortDirection.toLowerCase() === "asc") {
          defaultSort.sortDirection = _SortDirection2.default.ASC;
        } else if (_underscore2.default.isString(defaultSort.sortDirection) && defaultSort.sortDirection.toLowerCase() === "desc") {
          defaultSort.sortDirection = _SortDirection2.default.DESC;
        }

        this.setTableSort(defaultSort);
      }

      setTimeout(function () {
        _this2.setState({ needsRefresh: true });
      }, 1);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.mainGrid || !this.mainGrid._bottomRightGrid) {
        return;
      }

      var containerWidth = this.mainGrid._containerBottomStyle.width;
      var contentWidth = this.mainGrid._leftGridWidth + this.mainGrid._bottomRightGrid._scrollingContainer.scrollWidth;

      var newState = {};

      if (containerWidth === contentWidth) {
        newState = { scrolledAllLeft: true, scrolledAllRight: true };
      }

      if (this.mainGrid && (!_underscore2.default.isEqual(nextProps.items, this.props.items) || !_underscore2.default.isEqual(_underscore2.default.map(nextProps.columns, function (c) {
        return { name: c.name, key: c.key };
      }), _underscore2.default.map(this.props.columns, function (c) {
        return { name: c.name, key: c.key };
      })))) {
        this.cellSizeCache._rowCount = 0;
        this.cellSizeCache._columnCount = 0;
        this._refreshGridSize();
        this.mainGrid.invalidateCellSizeAfterRender();
      }

      this.setState(newState);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.state.focusCol && this.state.focusCol === nextState.focusCol) {
        this.setState({ focusCol: null });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (!this.mainGrid) {
        return;
      }

      if (this.state.focusCol !== null) {
        setTimeout(function () {
          if (!_this3.filters[_this3.state.focusCol]) {
            return;
          }

          _this3.filters[_this3.state.focusCol].focus();
        }, 200);
      }

      if (this.state.needsRefresh) {
        console.log("clearing refresh");
        this._refreshGridSize();
        this.setState({ needsRefresh: false });
      }
    }
  }, {
    key: "_refreshGridSize",
    value: function _refreshGridSize() {
      if (!this.mainGrid) {
        return;
      }

      this.cellSizeCache.clearAll();
      this.mainGrid.measureAllCells();
      // this.mainGrid.invalidateCellSizeAfterRender();
      this.mainGrid.forceUpdateGrids();
    }
  }, {
    key: "onFilterClicked",
    value: function onFilterClicked(colKey) {
      var _this4 = this;

      this.setState({
        filterOpened: !this.state.filterOpened,
        focusCol: this.state.filterOpened ? null : colKey
      }, function () {
        if (!_this4.mainGrid) return;
        _this4.mainGrid.forceUpdateGrids();
      });
      // prevent bubbling to the header
      return false;
    }
  }, {
    key: "callDataUpdate",
    value: function callDataUpdate(options) {
      this.props.onUpdateDataNeeded(options);
    }
  }, {
    key: "onFilterChanged",
    value: function onFilterChanged(filterObj) {
      var _this5 = this;

      var newFilters = _extends({}, this.state.filters, _defineProperty({}, filterObj.key, filterObj));

      this.setState(_extends({}, this.state, { filters: newFilters }), function () {
        // if this is a paged table, we need to notify that the filter has changed so the data can be
        // refreshed
        if (_this5.props.paged) {
          _this5.callDataUpdate({ filter: newFilters });
        }

        if (!_this5.props.paged) {
          _this5._refreshGridSize();
        }
      });
    }
  }, {
    key: "getColumnCount",
    value: function getColumnCount() {
      return this.getColumns().length;
    }
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      var length = this.getRows().length;
      return this.props.paged ? Math.min(length, this.props.pageSize + 1) : length;
    }

    /**
     * Gets the columns to render in our table
     * @return {[Object]} array of column objects
     */

  }, {
    key: "getColumns",
    value: function getColumns() {
      return this.props.columns;
    }
  }, {
    key: "getColumn",
    value: function getColumn(index) {
      // adds defaults to the column
      return _underscore2.default.defaults(this.getColumns()[index], {
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

  }, {
    key: "getRows",
    value: function getRows() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var _props = this.props,
          items = _props.items,
          paged = _props.paged;

      // get the name of each column into an array

      var colNames = {};
      this.getColumns().forEach(function (col) {
        colNames[col.key] = col.name;
      });

      if (!items || !items.length) {
        var emptyRow = {};
        _underscore2.default.each(colNames, function (value, key) {
          emptyRow[key] = " ";
        });

        var tempDataSet = [colNames, emptyRow];

        return index < 0 ? tempDataSet : tempDataSet[index];
      }

      // if we have a paged table, we don't need to do the filtering or sorting internally
      var filtered = paged ? items : this._filterRows(items);
      var sorted = paged ? filtered : this._sortRows(filtered);

      // put the header as column one, and the rest after
      var dataSet = [colNames].concat(_toConsumableArray(sorted));

      return index < 0 ? dataSet : dataSet[index];
    }

    // For now, sizing columns based on the type

  }, {
    key: "getColumnWidth",
    value: function getColumnWidth(index) {
      var _props2 = this.props,
          columns = _props2.columns,
          columnWidthMultiplier = _props2.columnWidthMultiplier,
          measureAll = _props2.measureAll;
      var _columns$index$index = columns[index.index],
          type = _columns$index$index.type,
          width = _columns$index$index.width;


      if (measureAll) {
        return this.cellSizeCache.columnWidth(index) + 20;
      }

      var newWidth = columnWidthMultiplier * 200;
      if (typeof width === "number") {
        newWidth = width;
      } else {
        switch (type) {
          case "text":
          case "list":
            newWidth = columnWidthMultiplier * 300;
            break;
          case "date":
            newWidth = columnWidthMultiplier * 150;
            break;
          case "checkbox":
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
  }, {
    key: "getRowHeight",
    value: function getRowHeight(index) {
      return this.cellSizeCache.rowHeight(index);
    }
  }, {
    key: "_filterRows",
    value: function _filterRows(items) {
      var _this6 = this;

      var filters = this.state.filters;
      if (filters === {}) {
        return items;
      }

      var filterItem = function filterItem(result, item, filterKey) {
        var filterObj = filters[filterKey];
        var filterCol = _underscore2.default.findWhere(_this6.getColumns(), { key: filterKey });
        var filterVal = filterObj.value.toLowerCase();

        if (!filterVal) {
          return;
        }

        var checkAgainst = DataGrid.formatData(filterCol, item);

        if (!checkAgainst) {
          result.keep = false;
          return;
        }

        var depth = 0;
        while (!_underscore2.default.isFunction(checkAgainst.toLowerCase) && checkAgainst.props && checkAgainst.props.children && depth < 5) {
          checkAgainst = checkAgainst.props.children;
          depth++;
        }

        if (!_underscore2.default.isFunction(checkAgainst.toLowerCase)) {
          result.keep = false;
          return;
        }

        var itemVal = checkAgainst.toLowerCase();

        if (itemVal && itemVal.indexOf(filterVal) < 0) {
          result.keep = false;
        }
      };

      return items.filter(function (item) {
        var result = { keep: true };

        Object.keys(filters).forEach(filterItem.bind(null, result, item));

        return result.keep;
      });
    }
  }, {
    key: "_sortRows",
    value: function _sortRows(items) {
      var _state = this.state,
          sortBy = _state.sortBy,
          sortDirection = _state.sortDirection;

      return DataGrid.sortRows(items, this.getColumns(), {
        sortBy: sortBy,
        sortDirection: sortDirection
      });
    }
  }, {
    key: "setTableSort",
    value: function setTableSort(_ref2, callback) {
      var _this7 = this;

      var sortBy = _ref2.sortBy,
          sortDirection = _ref2.sortDirection;

      if (!sortBy) {
        throw new Error("setTableSort requires sortBy option");
      }

      if (!sortDirection) {
        throw new Error("setTableSort requires sortDirection option");
      }

      this.setState(_extends({}, this.state, { sortBy: sortBy, sortDirection: sortDirection }), function () {
        if (_underscore2.default.isFunction(callback)) {
          callback();
        }

        _this7._refreshGridSize();
      });
    }
  }, {
    key: "onGridScroll",
    value: function onGridScroll(scrollInfo) {
      var _this8 = this;

      var scrollLeft = scrollInfo.scrollLeft,
          clientWidth = scrollInfo.clientWidth,
          scrollWidth = scrollInfo.scrollWidth;


      var scrolledAllRight = scrollLeft + clientWidth >= scrollWidth;
      var scrolledAllLeft = scrollLeft === 0;

      var updateObj = {};
      if (scrolledAllRight !== this.state.scrolledAllRight) {
        updateObj.scrolledAllRight = scrolledAllRight;
      }

      if (scrolledAllLeft !== this.state.scrolledAllLeft) {
        updateObj.scrolledAllLeft = scrolledAllLeft;
      }

      if (!_underscore2.default.isEqual(updateObj, {})) {
        console.log(updateObj);
        this.setState(updateObj, function () {
          if (!_this8.mainGrid) return;
          _this8.mainGrid.forceUpdateGrids();
        });
      }

      this.props.onScroll(scrollInfo);
    }
  }, {
    key: "renderMultiGrid",
    value: function renderMultiGrid(_ref3) {
      var _this9 = this;

      var width = _ref3.width,
          height = _ref3.height;
      var fixedColumns = this.props.fixedColumns;

      var boxShadow = this.state.scrolledAllLeft ? false : "1px 3px 3px #a2a2a2";
      var colCount = this.getColumnCount();
      var rowCount = this.getRowCount();
      console.log(rowCount);

      // if (rowCount < 2) {
      //   return DataGrid.emptyRenderer();
      // }

      return _react2.default.createElement(_MultiGrid2.default, {
        cellRenderer: this.renderCell,
        columnCount: colCount,
        columnWidth: this.getColumnWidth,
        fixedColumnCount: colCount < 2 ? 0 : Math.min(fixedColumns, colCount),
        height: height,
        rowHeight: this.getRowHeight,
        rowCount: rowCount,
        fixedRowCount: 1,
        deferredMeasurementCache: this.cellSizeCache,
        noRowsRenderer: DataGrid.emptyRenderer,
        width: width,
        onScroll: this.onGridScroll,
        enableFixedColumnScroll: true,
        className: (0, _classnames2.default)("data-grid", {
          "scrolled-left": this.state.scrolledAllLeft
        }),
        styleBottomLeftGrid: { boxShadow: boxShadow },
        ref: function ref(grid) {
          _this9.mainGrid = grid;
        }
      });
    }
  }, {
    key: "_onSortChanged",
    value: function _onSortChanged(column) {
      var _props3 = this.props,
          paged = _props3.paged,
          onUpdateDataNeeded = _props3.onUpdateDataNeeded;
      var _state2 = this.state,
          sortBy = _state2.sortBy,
          sortDirection = _state2.sortDirection;
      // discard non-sortable columns

      if (!column.sortable) {
        return;
      }

      var newSortObj = {};
      if (sortBy === column.key && column.sortable) {
        // clicking the header that is currently sorted invokes sorting in the opposite direction
        newSortObj.sortBy = column.key;
        newSortObj.sortDirection = sortDirection === _SortDirection2.default.ASC ? _SortDirection2.default.DESC : _SortDirection2.default.ASC;
      } else if (column.sortable) {
        // clicking other headers that are sortable will switch sorting to them, and default to ascending order
        newSortObj.sortBy = column.key;
        newSortObj.sortDirection = _SortDirection2.default.ASC;
      }

      this.setTableSort(newSortObj, function () {
        if (paged) {
          onUpdateDataNeeded({ sort: newSortObj });
        }
      });
    }
  }, {
    key: "renderCell",
    value: function renderCell(_ref4) {
      var _this10 = this;

      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          style = _ref4.style,
          parent = _ref4.parent;
      var onRowClicked = this.props.onRowClicked;

      var data = this.getRows(rowIndex);

      if (!data) {
        return null;
      }

      var column = this.getColumn(columnIndex);
      if (!column) return "";

      var _state3 = this.state,
          sortBy = _state3.sortBy,
          sortDirection = _state3.sortDirection;

      var filter = this.state.filters[column.key];

      var rowIsHeader = rowIndex === 0;
      var cellStyles = _extends({}, style);

      if (rowIsHeader) {
        cellStyles.minHeight = 45;
      }

      return _react2.default.createElement(
        _CellMeasurer2.default,
        {
          cache: this.cellSizeCache,
          columnIndex: columnIndex,
          key: columnIndex + "," + rowIndex,
          parent: parent,
          rowIndex: rowIndex,
          ref: function ref(cellMeasurer) {
            _this10.cellMeasurer = cellMeasurer;
          }
        },
        _react2.default.createElement(
          "div",
          {
            style: cellStyles,
            className: (0, _classnames2.default)({
              "grid-cell": !rowIsHeader,
              "grid-header-cell": rowIsHeader,
              "grid-header-filterable": column.filterable,
              "grid-row-even": rowIndex % 2 === 0,
              "first-col": columnIndex === 0,
              "last-col": columnIndex === this.getColumnCount(),
              "grid-cell-filter": rowIsHeader && this.state.filterOpened,
              "grid-cell-sort": rowIsHeader && sortBy === column.key,
              "grid-row-hovered": rowIndex === this.state.hoveredRowIndex,
              "grid-column-hovered": columnIndex === this.state.hoveredColumnIndex
            }),
            onMouseOver: function onMouseOver() {
              _this10.setState({
                hoveredColumnIndex: columnIndex,
                hoveredRowIndex: rowIndex
              }, function () {
                if (!_this10.mainGrid) return;
                _this10.mainGrid.forceUpdateGrids();
              });
            },
            onClick: function onClick() {
              if (rowIsHeader) {
                _this10._onSortChanged(column);
              } else {
                // delegate to onRowClicked prop
                onRowClicked(data);
              }
            }
          },
          rowIsHeader && sortBy === column.key && _react2.default.createElement(
            "span",
            { className: "grid-sort-indicator" },
            _react2.default.createElement("i", {
              className: (0, _classnames2.default)("fa", {
                "fa-sort-asc": sortDirection === _SortDirection2.default.ASC,
                "fa-sort-desc": sortDirection === _SortDirection2.default.DESC
              })
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "grid-cell-data" },
            rowIsHeader ? data[column.key] : DataGrid.formatData(column, data)
          ),
          rowIsHeader && column.filterable && _react2.default.createElement("input", {
            type: "text",
            className: "filter-input",
            onClick: function onClick(e) {
              // when we click on the input we need to prevent sorting
              e.stopPropagation();
            },
            ref: function ref(input) {
              _this10.filters[column.key] = input;
            },
            value: filter && filter.value ? filter.value : "",
            onChange: function onChange(e) {
              var filterObj = {
                key: column.key,
                value: e.target.value
              };

              _this10.onFilterChanged(filterObj);
            }
          }),
          rowIsHeader && column.filterable && _react2.default.createElement(
            "a",
            {
              className: (0, _classnames2.default)("grid-filter-indicator", {
                active: filter && filter.value
              }),
              tabIndex: columnIndex,
              onClick: function onClick(e) {
                e.stopPropagation();
                _this10.onFilterClicked(column.key);
              }
            },
            _react2.default.createElement("i", { className: "fa fa-filter fa-fw" })
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var _props4 = this.props,
          paged = _props4.paged,
          currentPage = _props4.currentPage;

      var filter = this.state.filters;
      var rowCount = this.getRowCount();
      var colCount = this.getColumnCount();
      var rows = this.getRows();
      var cols = this.getColumns().map(function (c) {
        return { key: c.key, name: c.name };
      });

      console.log(rows);
      console.log(cols);

      return _react2.default.createElement(
        "div",
        {
          className: "grid-container",
          ref: function ref(container) {
            _this11.container = container;
          }
        },
        _react2.default.createElement(
          "div",
          { className: "grid-content" },
          _react2.default.createElement(
            _AutoSizer2.default,
            _extends({}, this.props.gridProps, {
              needsRefresh: this.state.needsRefresh,
              rowCount: rowCount,
              colCount: colCount,
              items: rows,
              columns: cols,
              currentPage: currentPage,
              filter: filter
            }),
            this.renderMultiGrid
          )
        ),
        paged && this._renderFooter(),
        _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)("scroll-x-indicator", {
              faded: this.state.scrolledAllRight
            })
          },
          _react2.default.createElement("i", { className: "fa fa-fw fa-angle-double-right" })
        )
      );
    }
  }, {
    key: "_renderFooter",
    value: function _renderFooter() {
      var _props5 = this.props,
          pageSize = _props5.pageSize,
          totalItemCount = _props5.totalItemCount,
          currentPage = _props5.currentPage,
          onUpdateDataNeeded = _props5.onUpdateDataNeeded;


      var showing = Math.min(totalItemCount, (currentPage - 1) * pageSize + pageSize);
      return _react2.default.createElement(
        "div",
        { className: "grid-footer" },
        _react2.default.createElement(
          "div",
          { className: "paginator" },
          _react2.default.createElement(
            "div",
            { className: "paginator-label" },
            _react2.default.createElement(
              "em",
              null,
              "Showing ",
              (currentPage - 1) * pageSize + 1,
              " - ",
              showing,
              " of",
              " ",
              totalItemCount
            )
          ),
          _react2.default.createElement(_reactBootstrap.Pagination, {
            bsSize: "sm",
            items: Math.ceil(1.0 * totalItemCount / pageSize),
            activePage: currentPage,
            maxButtons: 4,
            ellipsis: true,
            onSelect: function onSelect(eventKey) {
              onUpdateDataNeeded({ page: eventKey });
            },
            prev: true,
            next: true
          })
        )
      );
    }
  }]);

  return DataGrid;
}(_react.Component);

DataGrid.propTypes = {
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired,
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired,
  onRowClicked: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  gridProps: _propTypes2.default.shape(),
  defaultSort: _propTypes2.default.shape({
    sortBy: _propTypes2.default.string,
    sortDirection: _propTypes2.default.string
  }),
  columnWidthMultiplier: _propTypes2.default.number,
  fixedColumns: _propTypes2.default.number,

  measureAll: _propTypes2.default.bool,

  // paging props follow
  paged: _propTypes2.default.bool,
  pageSize: _propTypes2.default.number,
  currentPage: _propTypes2.default.number,
  totalItemCount: _propTypes2.default.number,
  onUpdateDataNeeded: _propTypes2.default.func
};

DataGrid.defaultProps = {
  title: "",
  fixedColumns: 1,
  defaultSort: null,
  columnWidthMultiplier: 1,
  onPageChange: function onPageChange() {},
  onScroll: function onScroll() {},
  onRowClicked: function onRowClicked() {},
  measureAll: false,

  // paging props follow
  paged: false,
  pageSize: 50,
  currentPage: 1,
  totalItemCount: 0,
  onUpdateDataNeeded: function onUpdateDataNeeded() {}
};

exports.default = DataGrid;