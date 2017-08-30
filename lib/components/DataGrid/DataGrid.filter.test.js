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

it('should call onUpdateDataNeeded when filter is changed', function () {
  var stub = jest.fn();

  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns, paged: true, onUpdateDataNeeded: stub }));

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '1'
  });

  expect(stub).toHaveBeenCalled();
});

it('should have the proper number of rows once new items are set', function () {
  var stub = jest.fn();

  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns, paged: true, onUpdateDataNeeded: stub }));

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '2'
  });

  wrapper.setProps({
    items: items.filter(function (item) {
      return item.col1.includes('2');
    })
  });

  var cols = wrapper.instance().getRowCount();
  expect(cols).toBe(2);
});

it('should call renderMultiGrid when the length of items change', function () {
  var stub = jest.spyOn(_DataGrid2.default.prototype, 'renderMultiGrid');

  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_DataGrid2.default, { items: items, columns: columns, paged: true }));

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '2'
  });

  // updates here
  expect(stub).toHaveBeenCalledTimes(1);
  stub.mockReset();

  var filteredItems = items.filter(function (item) {
    return item.col1.includes('2');
  });
  wrapper.setProps({
    items: filteredItems,
    totalItemCount: filteredItems.length,
    currentPage: 1
  });

  expect(stub).toHaveBeenCalledTimes(1);
  stub.mockReset();
  stub.mockRestore();
});