import { zodResolver } from '@hookform/resolvers/zod';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginSchema from '../../schemas/user/loginSchema';
import userApi from '../../store/user/userSliceApi';
import Input from './../../components/Input';
import { useSnackbars } from './../../hooks/useSnackbars';

function GoToHome(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="/">
        {'Entrar como convidado'}
      </Link>
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function LoginTemplate() {

  const navigate = useNavigate()

  const { errorSnackbar } = useSnackbars()

  const [
    login,
    {
      isLoading: loadingLogin,
    }
  ] = userApi.useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const handleLogin = async (data) => {
    try {
      const token = await login(data).unwrap()

      localStorage.setItem('token', token.auth.token)
      localStorage.setItem('user', JSON.stringify({
        name: token.auth.name,
      }))
      navigate('/test')
    } catch (error) {
      errorSnackbar(error.data.error)
    }
  }

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
            onSubmit={handleSubmit(handleLogin)}
            noValidate sx={{ mt: 1 }}
          >
            <Input
              label='Email'
              focus={true}
              register={register('email')}
              errors={errors.email}
            />
            <Input
              label='Senha'
              register={register('password')}
              type='password'
              errors={errors.password}
            />
            <LoadingButton
              type="submit"
              loading={loadingLogin}
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
        <GoToHome sx={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
  )
}