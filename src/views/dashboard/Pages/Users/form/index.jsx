import {
    Box,
    Container,
    Grid,
    Paper
} from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Title from '../../../../../components/Dashboard/Title';
// import Input from '../../../../../components/Input';
// import Select from '../../../../../components/Select';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../../../../components/Dashboard/Input';
import Select from '../../../../../components/Dashboard/Select';
import { useSnackbars } from '../../../../../hooks/useSnackbars';
import { useGetOneQuery, useSignUpMutation } from '../../../../../store/user/userSliceApi';
import Separator from './../../../../../components/Separator/index';
import signUpSchema from './../../../../../schemas/user/signUpSchema';

export default function UserForm() {

    const params = useParams()

    const id = useMemo(() => !!params.id, [])

    const navigate = useNavigate()

    const { successSnackbar, errorSnackbar } = useSnackbars()

    const { data: userEdit } = useGetOneQuery({ id: params.id }, { skip: !id })

    const [
        signUp,
        { isLoading }
    ] = useSignUpMutation()

    const defaultValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user'
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues,
        values: userEdit,
        resetOptions: {
            keepDirtyValues: true
        }
    })

    useEffect(() => {
        reset(userEdit)
    }, [reset, userEdit])

    const onSave = async (data) => {
        try {
            const save =
                id
                    ? await update(data).unwrap()
                    : await signUp(data).unwrap()

            reset()

            successSnackbar(save.message)
        } catch (error) {
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
                            focus={!!id ? false : true}
                            errors={errors.name}
                        />
                        <Separator />
                        <Select
                            label="Permissões"
                            register={register('role')}
                            options={selectOptions}
                            errors={errors.role}
                        />
                        <Separator />
                        <Input
                            label='E-mail'
                            register={register('email')}
                            errors={errors.email}
                        />
                        <Separator />
                        {!id && <>
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
                        </>}
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
                                onClick={() => navigate(-1)}
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