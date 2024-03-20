import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from "react-router-dom";
import './style.css';

export default function RouteContainer(props) {

    const {
        to,
        label,
        icon,
        path
    } = props
    const location = useLocation();

    const selected = location.pathname.split('/')[2] === path

    return (<>
        <Link
            to={to}
            className='link'
        >
            <ListItemButton className={selected ? 'mark' : ''}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
            </ListItemButton>
        </Link>
    </>)
}