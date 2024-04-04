import TablePanel from "../../../components/Dashboard/Table"

export default function Users() {

    return (
        <>
            <TablePanel
                title='Listagem de Usuários'
                searchPlaceholder='Pesquisar Usuário(s)'
                path='/dashboard/users'
            />
        </>
    )
}