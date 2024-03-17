import { zodResolver } from '@hookform/resolvers/zod';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import signUpSchema from '../../schemas/user/signUpSchema';
import userApi from '../../store/user/userSliceApi';
import { messageActions } from './../../store/message/messageSlice';

const defaultTheme = createTheme();

export default function SignUpTemplate() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [
    signUp,
    { isLoading: loadingSignUp }
  ] = userApi.useSignUpMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signUpSchema)
  })

  const handleSignUp = async (data) => {
    const create = await signUp(data)

    create.data
      ? (
        dispatch(messageActions.successMessage({ label: create.data.message })),
        navigate('/login')
      )
      : dispatch(messageActions.errorMessage({ label: create.error.data.error }))
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
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
            <ShoppingBag />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crie sua conta
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(handleSignUp)} sx={{ mt: 2 }}>
            <Input
              label='Nome'
              focus={true}
              register={register('name')}
              errors={errors.name}
            />
            <Input
              label='Email'
              register={register('email')}
              errors={errors.email}
            />
            <Input
              label='Senha'
              type='password'
              register={register('password')}
              errors={errors.password}
            />
            <Input
              label='Confirme a senha'
              type='password'
              register={register('confirmPassword')}
              errors={errors.confirmPassword}
            />
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