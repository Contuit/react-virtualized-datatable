import _ from 'underscore';
import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import DataGrid from './modules/components/DataGrid/DataGrid';
import './modules/components/DataGrid/DataGrid.scss';
import './App.css';

// data for the grid
const items = [
  { col1: '(1,1)', col2: '(2,1)', col3: '3,1' },
  { col1: '(1,2)', col2: '(2,2)', col3: '3,2' },
  { col1: '(1,3)', col2: '(2,3)', col3: '3,3' },
  { col1: '(1,4)', col2: '(2,4)', col3: '3,4' }
];

// column definition for grid
const columns = [
  { name: 'Col 1', key: 'col1', type: 'string', isPrimary: true },
  { name: 'Col 2', key: 'col2', type: 'string', isPrimary: true },
  {
    name: 'Col 3',
    key: 'col3',
    type: 'string',
    isPrimary: true,
    formatter: item => {
      const split = item.col3.split(',');
      return `${split[0] - split[1]}`;
    }
  }
];

// data for the grid
const items2 = [
  {
    col1: '(1,1)',
    col2:
      'quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nul',
    col3: 1542203779000
  },
  { col1: '(1,2)', col2: '(2,2)', col3: 1501604957000 },
  { col1: '(1,3)', col2: '(2,3)', col3: 1501592534000 },
  { col1: '(1,4)', col2: '(2,4)', col3: 1501603876000 },
  { col1: '(1,5)', col2: '(2,5)', col3: 1501604957000 },
  { col1: '(1,6)', col2: '(2,6)', col3: 1501592534000 },
  { col1: '(1,7)', col2: '(2,7)', col3: 1501603876000 },
  { col1: '(1,8)', col2: '(2,8)', col3: 1501604957000 },
  { col1: '(1,9)', col2: '(2,9)', col3: 1501592534000 },
  { col1: '(1,10)', col2: '(2,10)', col3: 1501603876000 },
  { col1: '(1,11)', col2: '(2,11)', col3: 1501604957000 },
  { col1: '(1,12)', col2: '(2,12)', col3: 1501592534000 },
  { col1: '(1,13)', col2: '(2,13)', col3: 1501603876000 }
];

// column definition for grid
const columns2 = [
  { name: 'Col 1', key: 'col1', type: 'string', isPrimary: true },
  { name: 'Col 2', key: 'col2', type: 'string', isPrimary: true },
  {
    name: 'Col 3',
    key: 'col3',
    type: 'date',
    formatter: event => moment(event.col3).format('M/D hh:mm')
  }
];

class PageExample extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      filter: {}
    };

    this.pageSize = 10;
  }

  getRows(filtered) {
    return _.first(
      _.rest(filtered, (this.state.currentPage - 1) * this.pageSize),
      this.pageSize
    );
  }

  getFilteredRows() {
    return items2.filter(item => {
      let matches = true;
      _.each(this.state.filter, (value, key) => {
        matches = matches && item[key].includes(value.value);
      });

      return matches;
    });
  }

  render() {
    const filtered = this.getFilteredRows();
    const rows = this.getRows(filtered);
    console.log(rows);
    return (
      <div>
        <div className="grid-demo-header">
          <h1>Paged Demo</h1>
        </div>
        <div className="grid-demo">
          <DataGrid
            items={rows}
            columns={columns2}
            totalItemCount={filtered.length}
            paged
            pageSize={this.pageSize}
            currentPage={this.state.currentPage}
            // called with the props that have changed requiring a refresh
            // because of this, we need to check for existance and update our state accordingly
            onUpdateDataNeeded={({ page, filter }) => {
              const updateObj = {};
              if (page) {
                updateObj.currentPage = page;
              }

              if (filter) {
                updateObj.filter = filter;

                // this will need to happen for sort too
                updateObj.currentPage = 1;
              }

              this.setState(updateObj);
            }}
          />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Data Grid</h2>
        </div>
        {/* <div>
          <div className="grid-demo-header">
            <h1>Basic Demo</h1>
          </div>
          <div className="grid-demo">
            <DataGrid items={items} columns={columns} />
          </div>
        </div>
        <div>
          <div className="grid-demo-header">
            <h1>Data Demo</h1>
          </div>
          <div className="grid-demo">
            <DataGrid items={items2} columns={columns2} />
          </div>
        </div> */}
        <PageExample />
      </div>
    );
  }
}

export default App;
