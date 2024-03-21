import { configureStore } from '@reduxjs/toolkit'

// Slices
import productsReducer from './products/productsSlice';

// RTK Query Api
import { productsApi } from './products/productsSliceApi';
import { userApi } from './user/userSliceApi';

const store = configureStore({
    reducer: {
        productsEntity: productsReducer,
        [userApi.reducerPath]: userApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            productsApi.middleware
        )
})

export default store
