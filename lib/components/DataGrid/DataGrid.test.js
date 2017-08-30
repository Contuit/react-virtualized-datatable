'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _DataGrid = require('./DataGrid');

var _DataGrid2 = _interopRequireDefault(_DataGrid);

var _reactVirtualized = require('react-virtualized');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// data for the grid
var items = [{ col1: '(1,1)', col2: '(2,1)', col3: '(3,1)' }, { col1: '(1,2)', col2: '(2,2)', col3: '(3,2)' }, { col1: '(1,3)', col2: '(2,3)', col3: '(3,3)' }, { col1: '(1,4)', col2: '(2,4)', col3: '(3,4)' }];

// column definition for grid
var columns = [{ name: 'Col 1', key: 'col1', type: 'string', isPrimary: true }, { name: 'Col 2', key: 'col2', type: 'string', isPrimary: true }, { name: 'Col 3', key: 'col3', type: 'string', isPrimary: true }];

var autoSizerStub = void 0;
beforeEach(function () {
  autoSizerStub = jest.spyOn(_reactVirtualized.AutoSizer.prototype, 'render').mockImplementation(function () {
    return _react2.default.createElement(
      'div',
      { ref: this._setRef, style: { overflow: 'visible' } },
      this.props.children({ height: 500, width: 500 })
    );
  });
});

afterEach(function () {
  autoSizerStub.mockReset();
  autoSizerStub.mockRestore();
});

it('renders without crashing', function () {
  (0, _enzyme.shallow)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));
});

it('has an AutoSizer child', function () {
  var grid = (0, _enzyme.shallow)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));

  expect(grid.find(_reactVirtualized.AutoSizer).length).toBe(1);
});

it('has an MultiGrid child', function () {
  var stub = jest.spyOn(_DataGrid2.default.prototype, 'renderMultiGrid');

  (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));

  expect(stub).toHaveBeenCalled();
  stub.mockReset();
  stub.mockRestore();
});

it('has a .data-grid child', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));

  expect(wrapper.find(_reactVirtualized.MultiGrid).length).toBe(1);
});

it('has a pager if paged prop is set', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns, paged: true }));

  expect(wrapper.find('.grid-footer').length).toBe(1);
});

it("shouldn't have a pager if paged prop isn't set", function () {
  // test opposite too
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));

  expect(wrapper.find('.grid-footer').length).toBe(0);
});

it('should have number of pages based on total count and page size', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 72,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 10,
    currentPage: 1
  }));

  expect(
  // filters out the prev and next
  wrapper.find('.pagination li').filterWhere(function (n) {
    return !n.find('span').length;
  }).length).toBe(8);
});

it('should have number of pages based on total count and page size', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 10,
    currentPage: 1
  }));

  expect(wrapper.find('.pagination li').filterWhere(function (n) {
    return !n.find('span').length;
  }).length).toBe(1);
});

it('should render only page size rows if items.length is > page size', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 2,
    currentPage: 1
  }));

  // checking for 3 because it includes the header row
  expect(wrapper.find(_reactVirtualized.MultiGrid).prop('rowCount')).toBe(3);
});

it('should render normal number of rows with no paged prop', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns }));

  // checking for 3 because it includes the header row
  expect(wrapper.find(_reactVirtualized.MultiGrid).prop('rowCount')).toBe(5);
});

it('should call onUpdateDataNeeded when a new page is clicked', function () {
  var updateDataMock = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 2,
    currentPage: 1,
    onUpdateDataNeeded: updateDataMock
  }));

  // click page 2 button
  wrapper.find('.pagination li a').filterWhere(function (n) {
    return !n.find('span').length;
  }) // filters out the prev and next
  .at(1).simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 2 });
});

it('should active class on correct page', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 2,
    currentPage: 2
  }));

  // click page 2 button
  expect(wrapper.find('.pagination li').filterWhere(function (n) {
    return !n.find('span').length;
  }) // filters out the prev and next
  .at(1).hasClass('active')).toBe(true);
});

it('should have next and back buttons', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true
  }));

  // click page 2 button
  expect(wrapper.find('.pagination [aria-label="Next"]').length).toBe(1);
  expect(wrapper.find('.pagination [aria-label="Previous"]').length).toBe(1);
});

it('should call onUpdateDataNeeded when next is clicked', function () {
  var updateDataMock = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 1,
    currentPage: 2,
    onUpdateDataNeeded: updateDataMock
  }));

  // click page 2 button
  wrapper.find('.pagination li a').filterWhere(function (n) {
    return n.find('span').length;
  }) // gets only prev and next
  .at(1).simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 3 });
});

it('should call onUpdateDataNeeded when previous is clicked', function () {
  var updateDataMock = jest.fn();
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, {
    items: items,
    totalItemCount: 10,
    columns: columns
    // paging options follow
    , paged: true,
    pageSize: 1,
    currentPage: 2,
    onUpdateDataNeeded: updateDataMock
  }));

  // click page 2 button
  wrapper.find('.pagination li a').filterWhere(function (n) {
    return n.find('span').length;
  }) // gets only prev and next
  .at(0).simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 1 });
});