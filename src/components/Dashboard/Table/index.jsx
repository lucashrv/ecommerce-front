import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import { useState } from 'react';
import Title from '../Title';
import TablePaginationActions from './TablePagination';

export default function TablePanel(props) {

    const {
        title,
        columns = [],
        data = [],
        listItems = [],
    } = props

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Grid container spacing={1}>
            <Paper
                sx={{
                    p: 2,
                    ml: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}
            >
                <Title>{title}</Title>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((item, i) => {
                                    return (
                                        <TableCell
                                            key={i}
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            {item}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data
                            ).map((row, i) => (
                                <TableRow key={i}>
                                    {listItems.map((item, i) =>
                                        <TableCell key={i}>
                                            {row[item]}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter >
                            <TableRow >
                                <TablePagination
                                    labelRowsPerPage='Items por página'
                                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                    colSpan={3}
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    slotProps={{
                                        select: {
                                            inputProps: {
                                                'aria-label': 'items por página',
                                            },
                                            native: true,
                                        },
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    sx={{ display: 'flex' }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid >
    );
}