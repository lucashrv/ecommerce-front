import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        {"Meu Site"}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function LoginTemplate() {

  const navigate = useNavigate()

  const { api, loading, error } = useAxios()

  const [data, setData] = useState({})

  const updateData = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const login = async (event) => {
    event.preventDefault()

    const token = await api.post('/user/login', data)
    localStorage.setItem('token', token?.auth?.token)
    localStorage.setItem('user', JSON.stringify({
      name: token?.auth?.name,
      role: token?.auth?.role
    }))

    navigate('/test')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '320px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Conecte-se
          </Typography>
          <Box
            component="form"
            onSubmit={login}
            noValidate sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              label="Email"
              name='email'
              autoFocus
              onChange={updateData}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              name='password'
              type="password"
              size="small"
              onChange={updateData}
            />
            <LoadingButton
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth
              sx={{ mt: 1, mb: 2 }}
            >
              ENTRAR
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Não possui uma conta? Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}