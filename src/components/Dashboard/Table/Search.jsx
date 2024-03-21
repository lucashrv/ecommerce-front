import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function Search(props) {

    const {
        placeholder,
        disabled = true
    } = props

    return (
        <Paper
            component="form"
            sx={{
                paddingLeft: '10px',
                display: 'flex',
                alignItems: 'center',
                minWidth: 200,
                maxWidth: 450,
                height: 40,
                borderTop: '1px solid #00000018'
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search google maps' }}
                disabled={disabled}
            />
            <Divider sx={{ height: 30, m: 1 }} orientation="vertical" />
            <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                disabled={disabled}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}