import {
    Box,
    Container,
    Grid,
    Paper
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Title from '../../../../../components/Dashboard/Title';
import Input from '../../../../../components/Input';
import Select from '../../../../../components/Select';
import { useSnackbars } from '../../../../../hooks/useSnackbars';
import { useSignUpMutation } from '../../../../../store/user/userSliceApi';
import Separator from './../../../../../components/Separator/index';

export default function UserForm() {

    const id = false

    const navigate = useNavigate()

    const location = useLocation()
    const pathnameBack = `/dashboard/${location.pathname.split('/')[2]}`

    const { successSnackbar, errorSnackbar } = useSnackbars()

    const [
        signUp,
        { isLoading }
    ] = useSignUpMutation()

    const defaultValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({

        defaultValues
    })

    const onSave = async (data) => {
        try {
            const create = await signUp(data).unwrap()

            reset()

            successSnackbar(create.message)
        } catch (error) {
            console.log(error);
            errorSnackbar(error.data.error)
        }
    }

    const selectOptions = [
        { label: 'Usuário', value: 'user' },
        { label: 'Administrador', value: 'admin' },
    ]

    return (
        <Grid container spacing={1}>
            <Paper
                sx={{
                    p: 2,
                    ml: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minWidth: 250,
                    maxHeight: 'calc(100vh - 75px)',
                    overflow: 'auto'
                }}
            >
                <Title>{`${!!id ? 'Editar' : 'Cadastrar'} Usuário`}</Title>
                <Container component="main" >
                    <Box component="form" noValidate onSubmit={handleSubmit(onSave)}>
                        <Input
                            label='Nome'
                            register={register('name')}
                            errors={errors.name}
                        />
                        <Separator />
                        <Select
                            label='Permissão'
                            options={selectOptions}
                            register={register('role')}
                        />
                        <Separator />
                        <Input
                            label='E-mail'
                            focus={!!id ? false : true}
                            register={register('email')}
                            errors={errors.email}
                        />
                        <Separator />
                        <Input
                            label='Senha'
                            register={register('password')}
                            type='password'
                            errors={errors.password}
                        />
                        <Separator />
                        <Input
                            label='Confirme a senha'
                            type='password'
                            register={register('confirmPassword')}
                            errors={errors.confirmPassword}
                        />
                        <Separator />
                        <Grid
                            container
                            style={{
                                padding: '25px 0 10px 0',
                                display: 'flex',
                                alignItems: 'center',
                                'justifyContent': 'flex-end',
                                gap: '10px',
                            }}
                        >
                            <Button
                                label='Voltar'
                                padding='3px'
                                fontSize='11px'
                                type='button'
                                loading={isLoading}
                                onClick={() => navigate(pathnameBack)}
                            />
                            <Button
                                label={`${!!id ? 'Editar' : 'Cadastrar'}`}
                                padding='3px'
                                fontSize='11px'
                                color='success'
                                loading={isLoading}
                            />
                        </Grid>
                    </Box>
                </Container>
            </Paper>
        </Grid >
    )
}