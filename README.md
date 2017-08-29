# React Virtualized DataTable

## Standard Paging

Paging requires a set or properties to be set on the Grid.

| prop  | type  | default | description |
+-------+-------+---------+-------------+
| paged | boolean | false | Indicates that the table will be paged |
| pageSize | number | 50 | Determines the size of each page |
| currentPage | number | 1 | Tells the table which page of data is currently displayed |
| totalItemCount | number | 0 | Allows the table to calculate the total number of pages |
| onUpdateDataNeeded | function | - | Called when the table needs new data. See below for details |


### onUpdateDataNeeded

This function handles the bulk of the paging logic. It will be called in three cases:
 - page changes
 - filter changes
 - sort changes

The user needs to determine what the new data is and update properties accordingly. **Note:** Only the property that has changed will be passed to the function. Due to this you need to check for existence to determine what to do. This is most likely one action (API call to get new data) with the current state of these three attributes.

```
<DataGrid
  items={rows}
  columns={columns}
  paged
  totalItemCount={totalRows.length}
  pageSize={10}
  currentPage={this.state.pageSize}
  onUpdateDataNeeded={({ page, filter, sort }) => {
    if (page) {
      // handle new page
    }

    if (filter) {
      // handle new filter
    }

    if (sort) {
      // handle new sort
    }
  }}
/>
```

TODO
------
 [ ] split `renderCell` into `renderHeaderCell` and `renderCell`
 [ ] unit test filtering
     - multiple columns
     - null values in table
     - filterable option
 [ ] unit test sorting
     - null values in table
     - sortable option
