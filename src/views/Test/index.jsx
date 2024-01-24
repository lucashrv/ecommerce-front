import * as React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userActions, selectUser } from '../../redux/slices/userSlice'
import { messageActions } from './../../redux/slices/messageSlice';
import { selectMessage } from './../../redux/slices/messageSlice';
import useApi from '../../hooks/useReactQuery'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import testSchema from '../../schemas/testSchema';

const Test = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const api = useApi()

    const {
        data,
        isLoading,
        error
    } = api.query('/products', ['get-products'])

    const {
        mutateAsync: mutatePost,
        isSuccess
    } = api.mutatePost('/products', ['get-products'])

    const {
        mutateAsync: mutateDelete
    } = api.mutateDelete(['get-products'])


    const userList = useSelector(selectUser.list)
    const message = useSelector(selectMessage.state)

    const despachar = async (e) => {
        e.preventDefault()
        const data = {
            name: '1',
            description: '1',
            price: 113.99,
            amount: 12,
            image: 'image',
            category_id: 1
        }

        const create = await mutatePost(data)
        dispatch(userActions.updateEntity(create))
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            const dest = await mutateDelete('/products/21')
            //
            if (message.show) {
                dispatch(messageActions.hideMessage())
            } else {
                dispatch(messageActions.showMessage({
                    label: dest.statusText,
                    variant: 'success'
                }))
            }
        } catch (err) {
            const error = err.response.data.error
            dispatch(userActions.updateState({ error }))
            //
            if (!message.show) {
                dispatch(messageActions.showMessage({
                    label: err.response.data.error,
                    variant: 'error'
                }))
            }
        }
    }

    const logout = () => {
        localStorage.clear()

        navigate("/login")
    }

    useEffect(() => {
        data &&
            dispatch(userActions.updateState({
                list: [...data],
                loading: isLoading,
                error
            }))
    }, [data, isLoading, error, dispatch])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(testSchema)
    })
    console.log('asd')
    console.log(errors);
    const handleForm = (data) => {
        console.log(data);
    }

    return (<>
        <div>

            {userList &&
                userList.map(item =>
                    (<p key={item.id}>{item.name}</p>)
                )
            }
            <br /><br /><br />

            <form onSubmit={handleSubmit(handleForm)}>
                <div key={1}>
                    <label>email</label>
                    <input
                        {...register('email')}
                        type="text"
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div key={2}>
                    <label>age</label>
                    <input
                        type="text"
                        {...register('age')}
                    />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>
                <div key={31}>
                    <label>search</label>
                    <input
                        type="text"
                        {...register('search')}
                    />
                    {errors.search && <span>{errors.search.message}</span>}
                </div>

                <button type='submit'>SUBMIT</button>
            </form>

            <br /><br /><br />

            <button onClick={despachar}>teste</button>
            <br /><br />
            <button onClick={handleDelete}>deletar</button>
            <br /><br />
            <button onClick={logout}>logout</button>
            <br /><br />

        </div>
    </>)
}

export default Test
