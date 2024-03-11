import ShoppingBag from '@mui/icons-material/ShoppingBag';
import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userApi from '../../store/user/userSliceApi';
import { messageActions } from './../../store/message/messageSlice';

const defaultTheme = createTheme();

export default function SignUpTemplate() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [
    signUp,
    {
      error: errorSignUp,
      isLoading: loadingSignUp,
    }
  ] = userApi.useSignupMutation()

  const {
    register,
    handleSubmit,
    formState: { errors } // /NOT RESOLVED
  } = useForm({
    resolver: zodResolver(signUpSchema)
  })

  const handleSignUp = async (data) => {
    try {
      const signUp = await signup(data)

      navigate('/login')
    } catch (err) {
      console.log(err)
      console.log(errorSignUp)
      dispatch(messageActions.errorMessage({ label: err.response.data.error }))

    }
  }

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
                  loading={loadingSignUp}
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
      </Container>
    </ThemeProvider>
  );
}