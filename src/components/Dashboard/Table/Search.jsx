import SearchIcon from '@mui/icons-material/Search';
import { CircularProgress } from '@mui/joy';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

export default function Search(props) {

    const {
        placeholder,
        disabled,
        loading = true
    } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        // Search ...
    }

    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 200,
                maxWidth: 450,
                height: 30,
                borderTop: '1px solid #00000018'
            }}
            onSubmit={handleSubmit}
        >
            <InputBase
                sx={{ ml: 1, mr: 1, flex: 1 }}
                placeholder={placeholder}
                inputProps={{ 'aria-label': placeholder }}
                disabled={loading || disabled}
            />
            <Divider sx={{ height: 30, }} orientation="vertical" />
            <IconButton
                type="submit"
                sx={{
                    p: '10px 10px 10px 0',
                    borderRadius: '0  5px 5px 0',
                    width: '50px',
                    height: 30
                }}
                aria-label="search"
                disabled={loading || disabled}
            >
                {loading
                    ? <CircularProgress size='sm' sx={{ marginLeft: '10px' }} />
                    : <SearchIcon />
                }
            </IconButton>
        </Paper >
    );
}