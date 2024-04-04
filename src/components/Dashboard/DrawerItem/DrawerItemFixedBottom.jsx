import { useNavigate } from "react-router-dom";
import { DrawerItemFixedBottomContainer } from "../../../views/dashboard/styled";

export default function DrawerItemFixedBottom(props) {
    const {
        icon,
        label,
        openDrawer
    } = props

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        navigate('/login')
    }

    return (
        <DrawerItemFixedBottomContainer
            onClick={handleLogout}
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
        </DrawerItemFixedBottomContainer>
    )
}