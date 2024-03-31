import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { IconButton } from '@mui/joy';
import { useState } from 'react';
import DrawerItem from '../../components/Dashboard/DrawerItem';
import {
    Container,
    Drawer,
    DrawerInfo,
    DrawerInfoItem,
    DrawerList,
    LogoName,
    MainContainer,
    MainNav
} from './styled';

export default function Dashboards() {

    const [openDrawer, setOpenDrawer] = useState(true)

    return (
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
                        icon={<HomeRoundedIcon style={{ fontSize: '1.3rem' }} />}
                        openDrawer={openDrawer}
                    />
                    <DrawerItem
                        label='Usuários'
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
                    <LogoName>E-Commerce</LogoName>
                    <IconButton
                        style={{ color: '#ffffff99' }}
                        color='inherit'
                        onClick={() => { }}
                    >
                        <LogoutRoundedIcon fontSize='medium' />
                    </IconButton>
                </MainNav>
            </MainContainer>
        </Container>
    )
}