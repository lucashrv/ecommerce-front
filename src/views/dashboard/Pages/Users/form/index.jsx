import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    Container,
    Grid,
    Paper
} from '@mui/material';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Dashboard/Input';
import Select from '../../../../../components/Dashboard/Select';
import Title from '../../../../../components/Dashboard/Title';
import { useSnackbars } from '../../../../../hooks/useSnackbars';
import { useGetOneQuery, useSignUpMutation, useUpdateUserMutation } from '../../../../../store/user/userSliceApi';
import Separator from './../../../../../components/Separator/index';
import createSchema from './../../../../../schemas/user/createSchema';
import updateSchema from './../../../../../schemas/user/updateSchema';

export default function UserForm() {

    const params = useParams()

    const id = useMemo(() => !!params.id, [])

    const navigate = useNavigate()

    const { successSnackbar, errorSnackbar } = useSnackbars()

    const { data: userEdit } = useGetOneQuery({ id: params.id }, { skip: !id })
    console.log(userEdit);
    const [
        signUp,
        { isLoading: signUpLoading }
    ] = useSignUpMutation()

    const [
        updateUser,
        { isLoading: updateLoading }
    ] = useUpdateUserMutation()

    const defaultValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        balance: 0
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(id ? updateSchema : createSchema),
        defaultValues,
        values: userEdit,
        resetOptions: {
            keepDirtyValues: true
        }
    })

    const onSave = async (data) => {
        try {
            const save =
                id
                    ? await updateUser({ id: params.id, body: data }).unwrap()
                    : await signUp(data).unwrap()

            !id && reset() // ver porque ao update não atualiza o usuário no form de update

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
                <Title>{`${id ? 'Editar' : 'Cadastrar'} Usuário`}</Title>
                <Container component="main" >
                    <Box component="form" noValidate onSubmit={handleSubmit(onSave)}>
                        <Input
                            label='Nome'
                            register={register('name')}
                            focus={!id}
                            errors={errors.name}
                        />
                        <Separator />
                        <Input
                            label='Saldo'
                            register={register('balance', {
                                setValueAs: v => parseFloat(v),
                            })}
                            errors={errors.balance}
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
                                loading={signUpLoading || updateLoading}
                                onClick={() => navigate(-1)}
                            />
                            <Button
                                label={`${id ? 'Editar' : 'Cadastrar'}`}
                                padding='3px'
                                fontSize='11px'
                                color='success'
                                loading={signUpLoading || updateLoading}
                            />
                        </Grid>
                    </Box>
                </Container>
            </Paper>
        </Grid >
    )
}