import React from 'react';
import { mount, shallow } from 'enzyme';
import DataGrid from './DataGrid';
import { AutoSizer, MultiGrid } from 'react-virtualized';

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

it('renders without crashing', () => {
  shallow(<DataGrid items={items} columns={columns} />);
});

it('has an AutoSizer child', () => {
  const grid = shallow(<DataGrid items={items} columns={columns} />);

  expect(grid.find(AutoSizer).length).toBe(1);
});

it('has an MultiGrid child', () => {
  const stub = jest.spyOn(DataGrid.prototype, 'renderMultiGrid');

  mount(<DataGrid items={items} columns={columns} />);

  expect(stub).toHaveBeenCalled();
  stub.mockReset();
  stub.mockRestore();
});

it('has a .data-grid child', () => {
  const wrapper = mount(<DataGrid items={items} columns={columns} />);

  expect(wrapper.find(MultiGrid).length).toBe(1);
});

it('has a pager if paged prop is set', () => {
  const wrapper = mount(<DataGrid items={items} columns={columns} paged />);

  expect(wrapper.find('.grid-footer').length).toBe(1);
});

it("shouldn't have a pager if paged prop isn't set", () => {
  // test opposite too
  const wrapper = mount(<DataGrid items={items} columns={columns} />);

  expect(wrapper.find('.grid-footer').length).toBe(0);
});

it('should have number of pages based on total count and page size', () => {
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={72}
      columns={columns}
      // paging options follow
      paged
      pageSize={10}
      currentPage={1}
    />
  );

  expect(
    // filters out the prev and next
    wrapper.find('.pagination li').filterWhere(n => !n.find('span').length)
      .length
  ).toBe(8);
});

it('should have number of pages based on total count and page size', () => {
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={10}
      currentPage={1}
    />
  );

  expect(
    wrapper.find('.pagination li').filterWhere(n => !n.find('span').length)
      .length
  ).toBe(1);
});

it('should render only page size rows if items.length is > page size', () => {
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={2}
      currentPage={1}
    />
  );

  // checking for 3 because it includes the header row
  expect(wrapper.find(MultiGrid).prop('rowCount')).toBe(3);
});

it('should render normal number of rows with no paged prop', () => {
  const wrapper = mount(<DataGrid items={items} columns={columns} />);

  // checking for 3 because it includes the header row
  expect(wrapper.find(MultiGrid).prop('rowCount')).toBe(5);
});

it('should call onUpdateDataNeeded when a new page is clicked', () => {
  const updateDataMock = jest.fn();
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={2}
      currentPage={1}
      onUpdateDataNeeded={updateDataMock}
    />
  );

  // click page 2 button
  wrapper
    .find('.pagination li a')
    .filterWhere(n => !n.find('span').length) // filters out the prev and next
    .at(1)
    .simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 2 });
});

it('should active class on correct page', () => {
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={2}
      currentPage={2}
    />
  );

  // click page 2 button
  expect(
    wrapper
      .find('.pagination li')
      .filterWhere(n => !n.find('span').length) // filters out the prev and next
      .at(1)
      .hasClass('active')
  ).toBe(true);
});

it('should have next and back buttons', () => {
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
    />
  );

  // click page 2 button
  expect(wrapper.find('.pagination [aria-label="Next"]').length).toBe(1);
  expect(wrapper.find('.pagination [aria-label="Previous"]').length).toBe(1);
});

it('should call onUpdateDataNeeded when next is clicked', () => {
  const updateDataMock = jest.fn();
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={1}
      currentPage={2}
      onUpdateDataNeeded={updateDataMock}
    />
  );

  // click page 2 button
  wrapper
    .find('.pagination li a')
    .filterWhere(n => n.find('span').length) // gets only prev and next
    .at(1)
    .simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 3 });
});

it('should call onUpdateDataNeeded when previous is clicked', () => {
  const updateDataMock = jest.fn();
  const wrapper = mount(
    <DataGrid
      items={items}
      totalItemCount={10}
      columns={columns}
      // paging options follow
      paged
      pageSize={1}
      currentPage={2}
      onUpdateDataNeeded={updateDataMock}
    />
  );

  // click page 2 button
  wrapper
    .find('.pagination li a')
    .filterWhere(n => n.find('span').length) // gets only prev and next
    .at(0)
    .simulate('click');
  expect(updateDataMock).toBeCalledWith({ page: 1 });
});
