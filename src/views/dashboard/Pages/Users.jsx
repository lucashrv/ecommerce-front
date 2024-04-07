import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TablePanel from "../../../components/Dashboard/Table";
import { useSnackbars } from "../../../hooks/useSnackbars";
import { useDeleteUserMutation, useGetAllQuery } from "../../../store/user/userSliceApi";

export default function Users() {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    const navigate = useNavigate()

    const { successSnackbar, errorSnackbar } = useSnackbars()

    const { data: usersData, isLoading } = useGetAllQuery({ page: page < 1 ? 1 : page })
    const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation()

    const columnsHeaders = [
        'E-mail',
        'Nome',
        'Permissão'
    ]

    const rowsContent = [
        'email',
        'name',
        'role'
    ]

    useEffect(() => {
        if (page < 1) {
            return navigate(`/dashboard/users?page=1`)
        }
    }, [page])

    const onDelete = async (id) => {
        try {
            const destroy = await deleteUser(id).unwrap()
            successSnackbar(destroy.message)
        } catch (error) {
            errorSnackbar(error.data.error)
        }
    }

    return (
        <>
            <TablePanel
                title='Listagem de Usuários'
                searchPlaceholder='Pesquisar Usuário(s)'
                path='/dashboard/users'
                data={usersData}
                loading={isLoading}
                columnsHeaders={columnsHeaders}
                rowsContent={rowsContent}
                onDelete={onDelete}
                loadingDelete={loadingDelete}
            />
        </>
    )
}