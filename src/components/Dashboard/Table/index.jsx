import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import {
    Grid,
    Paper
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';
import Title from '../Title';
import Search from './Search';
import {
    PaginationContainer,
    SearchContainer,
    TableContainer
} from './styled';

export default function TablePanel(props) {

    const {
        title = '',
        searchPlaceholder = '',
        searchDisabled = false,
        path = '',
        columnsHeaders = [],
        rowsContent = [],
        data = [],
        loading = true,
        onRowsPerPageChange,
        rowsPerPage,
        currentPage = 1
    } = props

    // const [page, setPage] = useState(1);
    function Content() {
        const location = useLocation();
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 10);

        console.log(query.get('page'));
        console.log(page);
        return (
            <Pagination
                page={page}
                count={10}
                size='small'

                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        sx={{
                            border: '1px solid #a6a6a616'
                        }}
                        to={`${path}${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
            />
        );// adicionar items per page e contador de itens paginas e total em cima de pagination
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('1', 159, 6.0, 24, 4.0),
        createData('2', 237, 9.0, 37, 4.3),
        createData('3', 262, 16.0, 24, 6.0),
        createData('4', 305, 3.7, 67, 4.3),
        createData('5', 356, 16.0, 49, 3.9),
        createData('6', 159, 6.0, 24, 4.0),
        createData('7', 237, 9.0, 37, 4.3),
        createData('8', 262, 16.0, 24, 6.0),
        createData('9', 305, 3.7, 67, 4.3),
        createData('10', 356, 16.0, 49, 3.9),
    ];

    return (
        <Grid container spacing={1}>
            <Paper
                sx={{
                    p: 2,
                    ml: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minWidth: 250,
                    maxHeight: 'calc(100vh - 75px)',
                    overflow: 'auto'
                }}
            >
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={searchDisabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>

                <TableContainer>
                    {/* <Typography level="body-sm" textAlign="center" sx={{ mb: 2 }}>
                        The table body is scrollable.
                    </Typography> */}
                    <Sheet sx={{
                        minHeight: 350,
                        overflow: 'auto',
                        bgcolor: '#fefefe',
                    }}>
                        <Table
                            aria-label="list table"
                            stickyHeader={rows.length > 10 ? true : false}
                            stickyFooter
                            hoverRow
                            size='sm'
                        >
                            <thead>
                                <tr>
                                    <th>Row</th>
                                    <th>Calories</th>
                                    <th>Fat&nbsp;(g)</th>
                                    <th>Carbs&nbsp;(g)</th>
                                    <th>Protein&nbsp;(g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.name}>
                                        <td>{row.name}</td>
                                        <td>{row.calories}</td>
                                        <td>{row.fat}</td>
                                        <td>{row.carbs}</td>
                                        <td>{row.protein}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <PaginationContainer>
                            <Content />
                        </PaginationContainer>
                    </Sheet>
                </TableContainer>

            </Paper>
        </Grid >
    );
}