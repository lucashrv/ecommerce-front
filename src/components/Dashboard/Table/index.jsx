import {
    Grid,
    Paper
} from '@mui/material';
import { useState } from 'react';
import Title from '../Title';
import Search from './Search';
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
                    minWidth: 250,
                    maxHeight: 'calc(100vh - 75px)', overflow: 'auto'
                }}
            >
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>
                <Title>{title}</Title>
                <SearchContainer>
                    <Search
                        disabled={disabled}
                        placeholder={searchPlaceholder}
                    />
                </SearchContainer>

            </Paper>
        </Grid >
    );
}