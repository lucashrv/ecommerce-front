import { useState } from 'react';
import TablePanel from '../../../components/Dashboard/Table';
import { useGetAllQuery } from '../../../store/user/userSliceApi';

export default function Orders() {

    const {
        data,
        isLoading
    } = useGetAllQuery()
    console.log(data, isLoading);
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const columns = [
        'Nome',
        'Email',
        'Cargo',
        'Saldo'
    ]
    console.log(rowsPerPage);
    const listItems = [
        'name',
        'email',
        'role',
        'balance'
    ]

    const changeRowsPerPage = (event) => {
        setRowsPerPage(Number(event.target.value));
        return event.target.value
    }

    return (
        <>
            <TablePanel
                title='Listagem de Usuários'
                searchPlaceholder='Pesquisar Usuários'
                data={data?.rows}
                columns={columns}
                listItems={listItems}
                onRowsPerPageChange={changeRowsPerPage}
                loading={isLoading}
                disabled={isLoading}
                currentPage={data?.currentPage}
                // last
                rowsPerPage={rowsPerPage}
            />
        </>
    )
}