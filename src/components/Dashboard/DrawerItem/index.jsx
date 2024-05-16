import { useLocation, useNavigate } from 'react-router-dom';
import {
    DrawerItemContainer
} from '../../../views/dashboard/styled';

export default function DrawerItem(props) {
    const {
        icon,
        label,
        openDrawer,
        path
    } = props

    const location = useLocation();

    const navigate = useNavigate()

    const selected = location.pathname.split('/')[2] === path.split('?')[0]

    const handleRedirect = () => {
        navigate(`/dashboard/${path}`)
    }

    return (
        <DrawerItemContainer
            onClick={handleRedirect}
            selected={selected}
        >
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
                </p>
            }
        </DrawerItemContainer>
    )
}
