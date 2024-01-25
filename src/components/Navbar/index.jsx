import { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import InputSearch from '../InputSeach';
import MenuIcon from '@mui/icons-material/Menu';
import {
    DivRight,
    Container,
    TypographyLogo,
    Span,
    DivLogin,
    DivSearch
} from './styled';
import './style.css'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    function stringToColor(string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i++) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    function stringAvatar(name) {
        let initials = ''
        let color = name
        const nameArray = name.split(' ')

        if (nameArray[1]) {
            initials = nameArray[0][0] + nameArray[1][0]
        } else if (!nameArray[1] && nameArray[0]) {
            initials = nameArray[0][0]
        } else {
            initials = '?'
            color = 'color'
        }

        return {
            sx: {
                bgcolor: stringToColor(color),
            },
            children: `${initials}`,
        };
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <Container className={`scroll-container ${scrolled ? 'scrolled' : ''}`}>
            <IconButton aria-label="menu">
                <MenuIcon />
            </IconButton>
            <TypographyLogo
                label={'Ecommerce'}
                href='/login'
            />

            <DivSearch>
            <InputSearch />
            </DivSearch>
            <DivRight>
                <DivLogin onClick={() => { }}>
                    {/* <Avatar
                        src=''
                        {...stringAvatar(user?.name ?? '')}
                    >
                    </Avatar> */}
                    <PersonIcon
                        fontSize='small'
                    />
                    <Span>{'ENTRAR'}</Span>
                </DivLogin>

                <IconButton onClick={() => { }} >
                    <ShoppingCartOutlinedIcon
                        fontSize='large'
                        style={{
                            color: '#fff',
                            fontSize: '1.5rem',
                            zIndex: '1'
                        }}
                    />
                </IconButton>
            </DivRight>
        </Container>
    );
}
export default Navbar;