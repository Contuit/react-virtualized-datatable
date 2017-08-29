import React from 'react';
import { mount } from 'enzyme';
import DataGrid from './DataGrid';
import { AutoSizer } from 'react-virtualized';

// data for the grid
const items = [
  { col1: '(1,1)', col2: '(2,1)', col3: '(3,1)' },
  { col1: '(1,2)', col2: '(2,2)', col3: '(3,2)' },
  { col1: '(1,3)', col2: '(2,3)', col3: '(3,3)' },
  { col1: '(1,4)', col2: '(2,4)', col3: '(3,4)' }
];

// column definition for grid
const columns = [
  { name: 'Col 1', key: 'col1', type: 'string', isPrimary: true },
  { name: 'Col 2', key: 'col2', type: 'string', isPrimary: true },
  { name: 'Col 3', key: 'col3', type: 'string', isPrimary: true }
];

let autoSizerStub;
beforeEach(() => {
  autoSizerStub = jest
    .spyOn(AutoSizer.prototype, 'render')
    .mockImplementation(function() {
      return (
        <div ref={this._setRef} style={{ overflow: 'visible' }}>
          {this.props.children({ height: 500, width: 500 })}
        </div>
      );
    });
});

afterEach(() => {
  autoSizerStub.mockReset();
  autoSizerStub.mockRestore();
});

it('should call onUpdateDataNeeded when filter is changed', () => {
  const stub = jest.fn();

  const wrapper = mount(
    <DataGrid items={items} columns={columns} paged onUpdateDataNeeded={stub} />
  );

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '1'
  });

  expect(stub).toHaveBeenCalled();
});

it('should have the proper number of rows once new items are set', () => {
  const stub = jest.fn();

  const wrapper = mount(
    <DataGrid items={items} columns={columns} paged onUpdateDataNeeded={stub} />
  );

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '2'
  });

  wrapper.setProps({
    items: items.filter(item => item.col1.includes('2'))
  });

  const cols = wrapper.instance().getRowCount();
  expect(cols).toBe(2);
});

it('should call renderMultiGrid when the length of items change', () => {
  const stub = jest.spyOn(DataGrid.prototype, 'renderMultiGrid');

  const wrapper = mount(<DataGrid items={items} columns={columns} paged />);

  // manually call onFilterChanged to simlate the user typing
  wrapper.instance().onFilterChanged({
    key: 'col1',
    value: '2'
  });

  // updates here
  expect(stub).toHaveBeenCalledTimes(1);
  stub.mockReset();

  const filteredItems = items.filter(item => item.col1.includes('2'));
  wrapper.setProps({
    items: filteredItems,
    totalItemCount: filteredItems.length,
    currentPage: 1
  });

  expect(stub).toHaveBeenCalledTimes(1);
  stub.mockReset();
  stub.mockRestore();
});
