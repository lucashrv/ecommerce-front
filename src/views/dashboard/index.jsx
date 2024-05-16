import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { CircularProgress, IconButton } from '@mui/joy';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerItem from '../../components/Dashboard/DrawerItem';
import DrawerItemFixedBottom from '../../components/Dashboard/DrawerItem/DrawerItemFixedBottom';
import { useSnackbars } from '../../hooks/useSnackbars';
import { useGetRoleQuery } from '../../store/user/userSliceApi';
import { ContainerFlexCenter } from '../../styles/utils';
import {
    Box,
    Container,
    Drawer,
    DrawerList,
    DrawerListContainer,
    LogoContainer,
    MainContainer,
    MainNav
} from './styled';

export default function Dashboard({ element: Component, ...props }) {

    const windowWidthCloseDrawer = window.innerWidth < 500 ? false : true

    const [openDrawer, setOpenDrawer] = useState(windowWidthCloseDrawer)

    const navigate = useNavigate()

    const { errorSnackbar } = useSnackbars()

    const { data: userRole, isSuccess } = useGetRoleQuery()

    useEffect(() => {
        if (userRole?.role && userRole.role !== 'admin') {
            errorSnackbar('Você não possui permissões de acesso!')
            navigate('/')
        }
    }, [isSuccess])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        navigate('/login')
    }

    return (
        <>
            {userRole?.role && userRole.role === 'admin' && (
                <>
                    <MainNav>
                        <LogoContainer>
                            <IconButton
                                style={{ color: '#1F77FD' }}
                                color='inherit'
                                onClick={() => setOpenDrawer(prev => !prev)}
                            >
                                {openDrawer
                                    ? <ArrowBackIosRoundedIcon fontSize='medium' />
                                    : <MenuRoundedIcon fontSize='medium' />
                                }
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, color: '#434343b9' }}
                            >
                                {'E-Commerce'}
                            </Typography>
                        </LogoContainer>
                        <IconButton
                            sx={{ borderRadius: '50%', marginRight: '10px' }}
                            onClick={handleLogout}
                        >
                            <LogoutRoundedIcon
                                fontSize='medium'
                                sx={{ color: '#418dff', marginLeft: '5px' }}
                            />
                        </IconButton>
                    </MainNav>
                    <Container $opendrawer={openDrawer}>
                        <Drawer $opendrawer={openDrawer}>
                            <DrawerList>
                                <DrawerListContainer>
                                    <DrawerItem
                                        label='Home'
                                        path='home'
                                        icon={<HomeRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                        openDrawer={openDrawer}
                                    />
                                    <DrawerItem
                                        label='Usuários'
                                        path='users?page=1'
                                        icon={<PersonRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                        openDrawer={openDrawer}
                                    />
                                </DrawerListContainer>
                                <DrawerItemFixedBottom
                                    label='Sair'
                                    icon={<LogoutRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                    openDrawer={openDrawer}
                                />
                            </DrawerList>
                        </Drawer>

                        <MainContainer>
                            <Box>
                                <Component {...props} />
                            </Box>

                        </MainContainer>
                    </Container>
                </>
            )}
            {!userRole?.role && (
                <ContainerFlexCenter>
                    <CircularProgress size="lg" />
                </ContainerFlexCenter>
            )}

        </>
    )
}