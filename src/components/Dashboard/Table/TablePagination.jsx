import {
    TablePagContainer,
    ButtonNavigate,
    ButtonNavigatePages
} from './styled'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TablePagination(props) {

    const {
        data,
        path,
        rowsPerPage = 10
    } = props

    const navigate = useNavigate()
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const search = query.get('search')

    const totalPages = Math.ceil(data.count / rowsPerPage)

    useEffect(() => {
        // Redirect to the page that has data
        // if (
        //     typeof page === 'number'
        //     && data?.count
        //     && page !== Math.ceil(data?.count / rowsPerPage)
        //     && data?.count < (rowsPerPage * page)
        // ) {
        //     return navigate(`
        //         ${path}?page=${totalPages}&${search ? 'search=' + search : ''}
        //     `)
        // }
    }, [data])

    const controls = {
        goTo: (page) => {
            query.set('page', page)
            query.sort()
            navigate(`${path}?${query.toString()}`)
        },
        init: () => {
            if (~~page === 1) return

            controls.goTo(1)
        },
        prev: () => {
            if ((~~page - 1) < 1) return

            controls.goTo(parseInt(page - 1))
        },
        next: () => {
            if ((~~page + 1) > totalPages) return

            controls.goTo(parseInt(page + 1))
        },
        last: () => {
            if (~~page === totalPages) return

            controls.goTo(totalPages)
        }
    }

    return (
        <TablePagContainer>
            <ButtonNavigate
                onClick={controls.init}
                disabled={~~page === 1}
            >
                <KeyboardDoubleArrowLeftRoundedIcon />
            </ButtonNavigate>

            <ButtonNavigate
                onClick={controls.prev}
                disabled={(page - 1) < 1}
            >
                <KeyboardArrowLeftRoundedIcon />
            </ButtonNavigate>

            <ButtonNavigatePages
                onClick={() => controls.goTo(page)}
                disabled={page}
                selected={true}
            >
                {page}
            </ButtonNavigatePages>

            {totalPages >= 2 && page + 1 <= totalPages && <>
                <ButtonNavigatePages
                    onClick={() => controls.goTo(page + 1)}

                >
                    {page + 1}
                </ButtonNavigatePages>
            </>}

            {totalPages >= 3 && page + 2 <= totalPages && <>
                <ButtonNavigatePages
                    onClick={() => controls.goTo(page + 2)}
                >
                    {page + 2}
                </ButtonNavigatePages>
            </>}

            {totalPages > 3 && totalPages - 3 >= page && <>
                <span>...</span>

                <ButtonNavigatePages
                    onClick={() => controls.goTo(totalPages)}
                >
                    {totalPages}
                </ButtonNavigatePages>
            </>}

            <ButtonNavigate
                onClick={controls.next}
                disabled={(page + 1) > totalPages}
            >
                <KeyboardArrowRightRoundedIcon />
            </ButtonNavigate>

            <ButtonNavigate
                onClick={controls.last}
                disabled={(page + 1) > totalPages}
            >
                <KeyboardDoubleArrowRightRoundedIcon />
            </ButtonNavigate>
        </TablePagContainer>
    );
}

export default TablePagination