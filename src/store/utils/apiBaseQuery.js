import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import env from './../../schemas/envSchema';

const baseQuery = fetchBaseQuery({
    baseUrl: env.VITE_DATABASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token')

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    }
})

export default baseQuery
