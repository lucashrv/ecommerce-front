import TablePanel from '../../../components/Dashboard/Table';

export default function Orders() {

    function createData(name, calories, fat) {
        return { name, calories, fat };
    }

    const data = [
        createData('Cupcake', 305, 3.7),
        createData('Donut', 452, 25.0),
        createData('Eclair', 262, 16.0),
        createData('Frozen yoghurt', 159, 6.0),
        createData('Gingerbread', 356, 16.0),
        createData('Honeycomb', 408, 3.2),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Jelly Bean', 375, 0.0),
        createData('KitKat', 518, 26.0),
        createData('Lollipop', 392, 0.2),
        createData('Marshmallow', 318, 0),
        createData('Nougat', 360, 19.0),
        createData('Oreo', 437, 18.0),
        createData('Cupcake1', 305, 3.7),
        createData('Donut1', 452, 25.0),
        createData('Eclair1', 262, 16.0),
        createData('Frozen yoghurt1', 159, 6.0),
        createData('Gingerbread1', 356, 16.0),
        createData('Honeycomb1', 408, 3.2),
        createData('Ice cream sandwich1', 237, 9.0),
        createData('Jelly Bean1', 375, 0.0),
        createData('KitKat1', 518, 26.0),
        createData('Lollipop1', 392, 0.2),
        createData('Marshmallow1', 318, 0),
        createData('Nougat1', 360, 19.0),
        createData('Oreo1', 437, 18.0),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

    const columns = [
        'Name',
        'Calories',
        'Fat'
    ]

    const listItems = [
        'name',
        'calories',
        'fat'
    ]

    return (
        <>
            <TablePanel
                title='Listagem de usuários'
                data={data}
                columns={columns}
                listItems={listItems}
            />
        </>
    )
}