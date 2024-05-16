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
    Paper,
    Popper
} from '@mui/material';
import TablePagination from './TablePagination';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const idOpen = open ? 'simple-popper' : undefined;

    const navigate = useNavigate()

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
                                                        onClick={() => navigate(`${path}/edit/${row.id}`)}
                                                    >
                                                        <EditOutlinedIcon
                                                            style={{
                                                                color: '#0048ff',
                                                                fontSize: '20px',
                                                            }}
                                                        />
                                                    </TdButton>
                                                    <TdButton
                                                        aria-describedby={idOpen}
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
                            <Popper id={idOpen} open={open} anchorEl={anchorEl}>
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
                                <TablePagination
                                    data={data}
                                    path={path}
                                />
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