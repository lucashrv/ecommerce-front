import * as React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';
import { Slide } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import MessageBar from '../../components/MessageBar';
import { useSelector, useDispatch } from 'react-redux'
import { userActions, selectUser } from '../../redux/slices/userSlice'
import { messageActions } from './../../redux/slices/messageSlice';
import { selectMessage } from './../../redux/slices/messageSlice';
import useApi from '../../hooks/useReactQuery'

const Test = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const api = useApi()

    const [openMessage, setOpenMessage] = useState(false)

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
    } = api.mutateDelete('get-products')


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

        // dispatch(messageActions.showMessage({
        //     label: 'chegou',
        //     variant: 'danger'
        // }))


        try {
            const dest = await mutateDelete('/products/21')
            //
            if(message.show) {
                dispatch(messageActions.hideMessage())
            }
            //
            if (!message.show) {
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

    const openMessageBar = () => {
        setOpenMessage(true)
    }

    const closeMessageBar = () => {
        setOpenMessage(false)
    }

    useEffect(() => {
        data &&
            dispatch(userActions.updateState({
                list: [...data],
                loading: isLoading,
                error
            }))
    }, [data, isLoading, error, dispatch])

    return (<>
        <div>
            <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
            </ul>

            <br />

            <MessageBar
                label='Sucesso'
                open={openMessage}
                onClose={closeMessageBar}
                variant='warning'
            />

            {userList &&
                userList.map(item =>
                    (<p key={item.id}>{item.name}</p>)
                )
            }

            {openMessage && (<>
                {/* <Alert variant="filled" severity="success">
                    This is a filled success Alert.This is a filled success Alert.This is a filled success Alert.This is a filled success Alert.
                </Alert> */}
                {/* <Snackbar open={localState} autoHideDuration={6000} onClose={() => { }}>
                    <Alert onClose={() => { }} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={localState}
                    onClose={() => { }}
                    message="Position"
                    key='{vertical + horizontal}'
                /> */}
                {/* <Snackbar
                    open={localState}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    onClose={() => { }}
                    TransitionComponent={TransitionLeft}
                    message="Transition"
                    autoHideDuration={2000}
                    key={"transition ? TransitionRight : ''"}
                /> */}
                {/* <Snackbar
                    open={localState}
                    onClose={() => { }}
                    TransitionComponent={TransitionLeft}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    autoHideDuration={6000}
                >
                    <Alert onClose={() => { }} severity="error" sx={{ width: '100%' }}>
                    
                    </Alert>
                </Snackbar> */}
            </>)}
            <button onClick={despachar}>teste</button>
            <br /><br />
            <button onClick={handleDelete}>deletar</button>
            <br /><br />
            <button onClick={logout}>logout</button>
            <br /><br />
            <button onClick={openMessageBar}>alert</button>

        </div>
    </>)
}

export default Test
