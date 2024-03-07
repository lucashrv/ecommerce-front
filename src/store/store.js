import { configureStore } from '@reduxjs/toolkit'

// Slices
import messageReducer from './message/messageSlice'
import productsReducer from './products/productsSlice';

// RTK Query Api
import productsApi from './products/productsSliceApi';
import userApi from './user/userSliceApi';

const store = configureStore({
    reducer: {
        message: messageReducer,
        productsEntity: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware)
})

export default store
