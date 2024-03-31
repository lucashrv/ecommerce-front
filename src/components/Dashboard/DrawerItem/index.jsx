import {
    DrawerItemContainer
} from '../../../views/dashboard/styled';

export default function DrawerItem(props) {
    const {
        icon,
        label,
        openDrawer
    } = props

    return (
        <DrawerItemContainer>
            {icon}
            {openDrawer &&
                <p
                    style={{
                        marginBottom: '1px',
                        fontSize: '0.9rem',
                        overflow: 'hidden'
                    }}
                >
                    {label}
                </p>}
        </DrawerItemContainer>
    )
}
