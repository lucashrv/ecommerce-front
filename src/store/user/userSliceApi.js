import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../utils/apiBaseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['user'],
    endpoints: (builder) => ({
        isAuthenticated: builder.query({
            query: () => '/user/checkauth',
            providesTags: ['user'],
        })
    })
})

export default userApi