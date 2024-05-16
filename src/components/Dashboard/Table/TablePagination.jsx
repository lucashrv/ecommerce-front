import Pagination from '@mui/material';
import PaginationItem from '@mui/material';

function TablePagination(props) {

    const {
        page,
        asd
    } = props

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
                    {...item}
                />
            )
            }
        />
    );
}

export default TablePagination