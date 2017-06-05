import React from 'react';
import { mount, shallow } from 'enzyme';
import chai from 'chai';
import { stub } from 'sinon';
import sinonChai from 'sinon-chai';
import DataGrid from './DataGrid';
import { AutoSizer } from 'react-virtualized';

chai.should();
chai.use(sinonChai);

// data for the grid
const items = [
  { col1: '(1,1)', col2: '(2,1)', col3: '(3,1)' },
  { col1: '(1,2)', col2: '(2,2)', col3: '(3,2)' },
  { col1: '(1,3)', col2: '(2,3)', col3: '(3,3)' },
  { col1: '(1,4)', col2: '(2,4)', col3: '(3,4)' },
];

// column definition for grid
const columns = [
  { name: 'Col 1', key: 'col1', type: 'string', isPrimary: true },
  { name: 'Col 2', key: 'col2', type: 'string', isPrimary: true },
  { name: 'Col 3', key: 'col3', type: 'string', isPrimary: true },
];

it('renders without crashing', () => {
  shallow(<DataGrid
    items={items}
    columns={columns}
  />);
});

it('has an AutoSizer child', () => {
  const grid = shallow(<DataGrid
    items={items}
    columns={columns}
  />);

  grid.find(AutoSizer).should.have.length(1);
});

it('has an MultiGrid child', () => {
  const renderMultiGrid =
    stub(DataGrid.prototype, 'renderMultiGrid');

  mount(<DataGrid
    items={items}
    columns={columns}
  />);

  renderMultiGrid.should.have.been.calledOnce;
  renderMultiGrid.restore();
});

it('has a .data-grid child', () => {
  const wrapper = mount(<DataGrid
    items={items}
    columns={columns}
  />);

  wrapper.find('.data-grid').should.have.length(1);
});
