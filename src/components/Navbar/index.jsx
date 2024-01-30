import './style.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { IconButton as MuiIconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';
import InputSearch from '../InputSearch';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import {
    DivRight,
    Container,
    TypographyLogo,
    Span,
    DivLogin,
    DivSearch,
    CircleCart,
    MenuButton
} from './styled';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'))

    const [searchValue, setSearchValue] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [openMenu, setOpenMenu] = useState(false);

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
    const [loadings, setLoadings] = useState(false)
    const handleSearchSubmit = (e) => {
        e.preventDefault()

        setLoadings(prev => !prev)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <Container className={`scroll-container ${scrolled ? 'scrolled' : ''}`}>
                <MenuButton
                    onClick={() => setOpenMenu(true)}
                >
                    <MenuIcon
                        fontSize='medium'
                    />
                </MenuButton>
                <TypographyLogo
                    label={'Ecommerce'}
                    href='/login'
                />

                <DivSearch>

                    <InputSearch
                        onSubmit={handleSearchSubmit}
                        value={searchValue}
                        loading={loadings}
                        onChange={e => setSearchValue(e.target.value)}
                    />
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

                    <MuiIconButton onClick={() => { }} >
                        <ShoppingCartOutlinedIcon
                            fontSize='large'
                            className='icon-cart'
                        />
                        <CircleCart>999</CircleCart>
                    </MuiIconButton>
                </DivRight>
            </Container>

            {/* Menu Mobile left */}
            <>
                <Drawer
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                    sx={{
                        '--Drawer-transitionDuration': open ? '0.4s' : '0.2s',
                        '--Drawer-transitionFunction': open
                            ? 'cubic-bezier(0.79,0.14,0.15,0.86)'
                            : 'cubic-bezier(0.77,0,0.18,1)',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0,
                            ml: '5px',
                            mt: 1,
                        }}
                    >

                        <ModalClose
                            size='lg'
                            id="close-icon"
                            sx={{
                                position: 'initial',
                                '&:hover': {
                                    backgroundColor: 'inherit',
                                },
                            }}
                        />
                    </Box>
                    <Input
                        size="sm"
                        placeholder="Pesquisar produto"
                        variant="plain"
                        endDecorator={<Search />}
                        slotProps={{
                            input: {
                                'aria-label': 'Pesquisar produto',
                            },
                        }}
                        sx={{
                            m: 3,
                            borderRadius: 0,
                            borderBottom: '2px solid',
                            borderColor: 'neutral.outlinedBorder',
                            '&:hover': {
                                borderColor: 'neutral.outlinedHoverBorder',
                            },
                            '&::before': {
                                border: '1.1px solid #111111d2',
                                transform: 'scaleX(0)',
                                left: 0,
                                right: 0,
                                bottom: '-2px',
                                top: 'unset',
                                transition: 'transform .3s cubic-bezier(0.1,0.9,0.2,1)',
                                borderRadius: 0,
                            },
                            '&:focus-within::before': {
                                transform: 'scaleX(1)',
                            },
                        }}
                    />
                    <List
                        size="sm"
                        component="nav"
                        sx={{
                            flex: 'none',
                            fontSize: 'sm',
                            '& > div': {
                                justifyContent: 'left',
                                paddingLeft: '30px',
                            },
                        }}
                    >
                        <ListItemButton sx={{ fontWeight: 'lg' }}>
                            Home
                        </ListItemButton>
                        <ListItemButton>About</ListItemButton>
                        <ListItemButton>Studio</ListItemButton>
                        <ListItemButton>Contact</ListItemButton>
                    </List>
                </Drawer>
            </>
        </>
    );
}
export default Navbar;