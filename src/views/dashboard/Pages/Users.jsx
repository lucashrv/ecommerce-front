import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Deposits from '../../../components/Dashboard/Deposits';
import Title from '../../../components/Dashboard/Title';

export default function Users() {
    return <>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Title>Usuários</Title>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Deposits />
                </Paper>
            </Grid>
        </Grid>
    </>
}