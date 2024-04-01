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
import { useSnackbars } from '../../hooks/useSnackbars';
import { useGetRoleQuery } from '../../store/user/userSliceApi';
import { ContainerFlexCenter } from '../../styles/utils';
import {
    Box,
    Container,
    Drawer,
    DrawerInfo,
    DrawerInfoItem,
    DrawerList,
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

    return (
        <>
            {userRole?.role && (
                <Container $opendrawer={openDrawer}>
                    <Drawer $opendrawer={openDrawer}>
                        <DrawerInfo $opendrawer={openDrawer}>
                            <DrawerInfoItem $opendrawer={openDrawer}>
                                <p>Administrador</p>
                                <h5>Usuário</h5>
                            </DrawerInfoItem>
                            <IconButton
                                style={{ color: '#ffffff99' }}
                                color='inherit'
                                onClick={() => setOpenDrawer(prev => !prev)}
                            >
                                {openDrawer
                                    ? <ArrowBackIosRoundedIcon fontSize='small' />
                                    : <MenuRoundedIcon fontSize='medium' />
                                }
                            </IconButton>
                        </DrawerInfo>

                        <DrawerList>
                            <DrawerItem
                                label='Home'
                                path='home'
                                icon={<HomeRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                openDrawer={openDrawer}
                            />
                            <DrawerItem
                                label='Usuários'
                                path='users'
                                icon={<PersonRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                openDrawer={openDrawer}
                            />
                            <DrawerItem
                                label='Sair'
                                icon={<LogoutRoundedIcon style={{ fontSize: '1.3rem' }} />}
                                openDrawer={openDrawer}
                            />
                        </DrawerList>
                    </Drawer>

                    <MainContainer>
                        <MainNav>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1, color: '#ffffffcc' }}
                            >
                                {'E-Commerce'}
                            </Typography>
                            <IconButton
                                style={{ color: '#ffffff99' }}
                                color='inherit'
                                onClick={() => { }}
                            >
                                <LogoutRoundedIcon fontSize='medium' />
                            </IconButton>
                        </MainNav>

                        <Box>
                            <Component {...props} />
                        </Box>

                    </MainContainer>
                </Container>
            )}
            {!userRole?.role && (
                <ContainerFlexCenter>
                    <CircularProgress size="lg" />
                </ContainerFlexCenter>
            )}

        </>
    )
}