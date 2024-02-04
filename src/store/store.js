import { configureStore } from '@reduxjs/toolkit'

// Slices
import messageReducer from './message/messageSlice'
import productsReducer from './products/productsSlice';

// RTK Query Api
import productsApi from './products/productsSliceApi';

const store = configureStore({
    reducer: {
        message: messageReducer,
        productsEntity: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)
})

export default store
