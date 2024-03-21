import {
    Box,
    CircularProgress,
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
import Search from './Search';
import TablePaginationActions from './TablePagination';
import { SearchContainer } from './styled';

export default function TablePanel(props) {

    const {
        title,
        columns = [],
        data = [],
        listItems = [],
        searchPlaceholder,
        onRowsPerPageChange,
        rowsPerPage,
        loading = true,
        disabled,
        currentPage = 1
    } = props

    const [page, setPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Grid container spacing={1}>
            <Paper
                sx={{
                    p: 2,
                    ml: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minWidth: 250
                }}
            >
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map((item, i) => {
                                    return (
                                        <TableCell
                                            key={i}
                                            style={{ fontWeight: 'bold' }}
                                            align="left"
                                        >
                                            {item}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        {!loading && (<>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : data
                                ).map((row, i) => (
                                    <TableRow key={i}>
                                        {listItems.map((item, i) =>
                                            <TableCell key={i} align="left">
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
                                        page={currentPage - 1}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'items por página',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={onRowsPerPageChange}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </>)}
                    </Table>
                    {loading && <>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100px'
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    </>}
                </TableContainer>
            </Paper>
        </Grid >
    );
}