import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
    DivRight,
    Container,
    TypographyLogo
} from './style';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'))

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

    return (
        <Container>
            <TypographyLogo />
            <DivRight>
                <Box sx={{ flexGrow: 0, justifySelf: 'end' }}>
                    <Tooltip>
                        <IconButton onClick={() => {}} sx={{ p: 0 }}>
                            <Avatar src='' {...stringAvatar(user?.name ?? '')}>
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
            </DivRight>
        </Container>
    );
}
export default Navbar;