import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoadingButton } from '@mui/lab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Meu Site
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUpTemplate() {

  const navigate = useNavigate()

  const { api, loading, error } = useAxios();

  const [localState, setLocalState] = useState({})

  const updateLocalState = (event) => {
    const { name, value } = event.target
    setLocalState({
      ...localState,
      [name]: value
    })
  }

  const signUp = async (event) => {
    event.preventDefault()

    const register = await api.post('/user/register', localState)

    register && navigate('/login')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ShoppingBag />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crie sua conta
          </Typography>
          <Box component="form" noValidate onSubmit={signUp} sx={{ mt: 2 }}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  name="name"
                  size="small"
                  onChange={updateLocalState}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  onChange={updateLocalState}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  size="small"
                  onChange={updateLocalState}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirme a senha"
                  type="password"
                  size="small"
                  onChange={updateLocalState}
                />
              </Grid>
              <Grid item xs={10}>
                <LoadingButton
                  type="submit"
                  loading={loading}
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1, mb: 2 }}
                >
                  CADASTRE-SE
                </LoadingButton>
              </Grid>
            </Grid>
            <Grid container style={{ marginRight: '50px' }} justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já possui um conta? Entre
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}