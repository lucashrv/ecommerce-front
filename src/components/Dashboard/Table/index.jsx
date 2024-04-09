import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
    CircularProgress,
    Sheet,
    Table
} from '@mui/joy';
import {
    Box,
    Fab,
    Grid,
    Pagination,
    PaginationItem,
    Paper,
    Popper
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Title from '../Title';
import Search from './Search';
import {
    ButtonContainer,
    HeaderContainer,
    LoadingContainer,
    PaginationContainer,
    PopoverButtonsContainer,
    SearchContainer,
    TableContainer,
    TdButton
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
        rowsPerPage = 10,
        onDelete,
        loadingDelete
    } = props

    const [anchorEl, setAnchorEl] = useState(null);
    const [idDelete, setIdDelete] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    const navigate = useNavigate()

    useEffect(() => {
        // Redirect to the page that has data
        if (
            typeof page === 'number'
            && page !== Math.ceil(data?.count / rowsPerPage)
            && data?.count < (rowsPerPage * page)
        ) {
            return navigate(`${path}?page=${Math.ceil(data?.count / rowsPerPage)}`)
        }
    }, [data])

    const setQueryParameters = (e) => {
        const page = e.target.innerText

        if (page === '1') {
            query.delete('page')
        } else {
            !query.has('page')
                ? query.append('page', page)
                : query.set('page', page)
        }

        query.sort()

        navigate(location.pathname + '?' + query.toString());
    }

    function PaginationComponent() {
        return (
            <Pagination
                page={page}
                count={Math.ceil(data?.count / rowsPerPage) || 1}
                size='small'
                onClick={setQueryParameters}
                renderItem={(item) => (

                    <PaginationItem
                        component={Link}
                        sx={{
                            border: '1px solid #a6a6a616'
                        }}
                        // to={`${path}${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                    />
                )
                }
            />
        );
    }

    const toggleDelete = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
    }

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
                <HeaderContainer>
                    <Title>{title}</Title>
                    <Link to={`${path}/add`}>
                        <Fab
                            size="medium"
                            color="primary"
                            aria-label="add"
                        >
                            <AddIcon />
                        </Fab>
                    </Link>
                </HeaderContainer>
                <SearchContainer>
                    <Search
                        disabled={searchDisabled}
                        placeholder={searchPlaceholder}
                        loading={loading}
                    />
                </SearchContainer>

                {!loading && (
                    <TableContainer>
                        {/* <Typography level="body-sm" textAlign="center" sx={{ mb: 2 }}>
                        The table body is scrollable.
                    </Typography> */}
                        <Sheet sx={{
                            minHeight: 350,
                            overflow: 'auto',
                            bgcolor: '#fefefe',
                            minWidth: `calc(${rowsContent.length} * 120px + 50px)`
                        }}>
                            <Table
                                aria-label="list table"
                                stickyHeader={data.rows.length > 10 ? true : false}
                                hoverRow
                                noWrap
                                size='sm'
                            >
                                <thead>
                                    <tr>
                                        {columnsHeaders.map((item, i) => (
                                            <th
                                                key={i}
                                                style={{ fontSize: '14px' }}
                                            >
                                                {item}
                                            </th>
                                        ))}
                                        <th
                                            style={{
                                                textAlign: 'right',
                                                width: '55px',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.rows.map((row) => (
                                        //   sx={{
                                        //     '& svg': {
                                        //       transition: '0.2s',
                                        //       transform:
                                        //         active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                        //     },
                                        //     '&:hover': { '& svg': { opacity: 1 } },
                                        //   }}
                                        // <ArrowDownward sx={{ opacity: active ? 1 : 0 }} />
                                        <tr key={row.email}>
                                            {rowsContent.map((content, i) => (
                                                <td
                                                    key={i}
                                                    style={{ fontSize: '13px' }}
                                                >
                                                    {row[content]}
                                                </td>
                                            ))}
                                            <td>
                                                <ButtonContainer>
                                                    <TdButton
                                                        onClick={() => { }}
                                                    >
                                                        <EditOutlinedIcon
                                                            style={{
                                                                color: '#0048ff',
                                                                fontSize: '20px',
                                                            }}
                                                        />
                                                    </TdButton>
                                                    <TdButton
                                                        aria-describedby={id}
                                                        onClick={(e) => {
                                                            toggleDelete(e)
                                                            setIdDelete(row.id)
                                                        }}
                                                    >
                                                        <DeleteOutlineOutlinedIcon
                                                            style={{
                                                                color: '#db1919',
                                                                fontSize: '20px',
                                                            }}
                                                        />
                                                    </TdButton>
                                                </ButtonContainer>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                                <Box sx={{
                                    border: 1,
                                    p: 2,
                                    bgcolor: '#f5f5f5',
                                    borderRadius: '5px'
                                }}
                                >
                                    <h6>Deseja deletar?</h6>
                                    <PopoverButtonsContainer>
                                        <button onClick={toggleDelete}>Cancelar</button>
                                        {loadingDelete
                                            ? <CircularProgress size='sm' />
                                            : (
                                                <button
                                                    onClick={async () => {
                                                        await onDelete(idDelete)
                                                        toggleDelete()

                                                    }}
                                                >
                                                    Deletar
                                                </button>
                                            )
                                        }

                                    </PopoverButtonsContainer>
                                </Box>
                            </Popper>
                            <PaginationContainer>
                                <PaginationComponent />
                            </PaginationContainer>
                        </Sheet>
                    </TableContainer>
                )}

                {loading && (
                    <LoadingContainer>
                        <CircularProgress size='md' />
                    </LoadingContainer>
                )}
            </Paper>
        </Grid >
    );
}