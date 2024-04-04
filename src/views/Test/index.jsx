import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useReactQuery';
import testSchema from '../../schemas/testSchema';
// import { selectUser, userActions } from '../../store/users/userSlice';
import { useSnackbars } from '../../hooks/useSnackbars';
import { productsActions } from '../../store/products/productsSlice';
import {
    useCreateProductMutation,
    useGetProductsQuery
} from '../../store/products/productsSliceApi';

const Test = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const api = useApi()
    const { successSnackbar, errorSnackbar } = useSnackbars()

    // const {
    //     data,
    //     isLoading,
    //     error
    // } = api.query('/products', ['get-products'])

    // const {
    //     mutateAsync: mutatePost,
    //     // isSuccess
    // } = api.mutatePost('/products', ['get-products'])

    const {
        mutateAsync: mutateDelete
    } = api.mutateDelete(['get-products'])

    // const { mutateAsync: userLogout } = api.mutatePost('/user/logout', ['logout'])

    // const { data: isAuthenticated } = userApi.useIsAuthenticatedQuery()
    const { data, error, isLoading } = useGetProductsQuery()

    const [
        createProduct,
        {
            error: errorCreate,
            isError: isErrorCreate,
            isLoading: loadingCreate,
            isSuccess
        }
    ] = useCreateProductMutation()

    const despachar = async (e) => {
        e.preventDefault()

        const data = {
            name: 'Message test',
            description: 'Message test',
            price: 12,
            amount: 1,
            image: 'image',
            category_id: 1
        }

        try {
            const create = await createProduct(data).unwrap()

            successSnackbar(create.message)
        } catch (error) {
            errorSnackbar(error.data.error)
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            const destroy = await mutateDelete('/products/22').unwrap()
            successSnackbar(destroy.message)
        } catch (error) {
            errorSnackbar(error.data.error)
        }
    }

    const logout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        navigate('/login')
    }

    // useEffect(() => {
    //     data &&
    //         dispatch(userActions.updateState({
    //             list: [...data],
    //             loading: isLoading,
    //             errors: error
    //         }))
    // }, [data, isLoading, error, dispatch])

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm({
        resolver: zodResolver(testSchema)
    })

    const handleForm = (data) => {
        console.log(data);
    }

    const updateEntityState = (entity, value) => {
        return dispatch(productsActions.updateEntity({ [entity]: value }))
    }

    return (<>
        <div>

            <br /><br /><br /><br />

            {data &&
                data.map(item =>
                    (<p key={item.id}>{item.name}</p>)
                )
            }
            <br /><br /><br />

            <form onSubmit={handleSubmit(handleForm)}>
                <div key={1}>
                    <label>email</label>
                    <input
                        type="text"
                        {...register('email')}
                        onChange={(e) => updateEntityState('email', e.target.value)}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div key={2}>
                    <label>age</label>
                    <input
                        type="text"
                        {...register('age')}
                        onChange={(e) => updateEntityState('age', e.target.value)}
                    />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>
                <div key={31}>
                    <label>search</label>
                    <input
                        type="text"
                        {...register('search')}
                        onChange={(e) => updateEntityState('search', e.target.value)}
                    />
                    {errors.search && <span>{errors.search.message}</span>}
                </div>

                <button type='submit'>SUBMIT</button>
            </form>

            <br /><br /><br />

            <button onClick={despachar}>teste</button>
            <br /><br />
            <button
                disabled={isSubmitting}
                onClick={handleDelete}
            >
                deletar
            </button>
            <br /><br />
            <button onClick={logout}>logout</button>
            <br /><br />

        </div>
    </>)
}

export default Test
