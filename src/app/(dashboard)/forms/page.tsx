'use client';
import React from 'react';
import { useTable, usePagination } from 'react-table';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Typography } from '@mui/material';

// Sample data
const userData = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'San Francisco' },
  { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
  { id: 4, name: 'David', age: 40, city: 'Los Angeles' },
  { id: 5, name: 'Eve', age: 45, city: 'Boston' },
  { id: 6, name: 'Frank', age: 50, city: 'Houston' },
];

const BasicTable = () => {
    const columns = React.useMemo(
        () => [
            { Header: 'ID', accessor: 'id' },
            { Header: 'Name', accessor: 'name' },
            { Header: 'Age', accessor: 'age' },
            { Header: 'City', accessor: 'city' },
        ],
        []
    );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: userData,
      initialState: { pageIndex: 0, pageSize: 2 },
    },
    usePagination
  );

  return (
    <>
    <Typography variant="h2" mt={5}>Forms</Typography>
    <Grid container spacing={0} mt={1}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[2, 4, 6]}
                  count={userData.length}
                  rowsPerPage={pageSize}
                  page={pageIndex}
                  onPageChange={(event, newPage) => gotoPage(newPage)}
                  onRowsPerPageChange={event => setPageSize(Number(event.target.value))}
                  nextIconButtonProps={{ disabled: !canNextPage }}
                  backIconButtonProps={{ disabled: !canPreviousPage }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </>
  );
};

export default BasicTable;
