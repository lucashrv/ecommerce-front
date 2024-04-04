import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../utils/apiBaseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['user'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/user/login',
                body,
                method: 'POST'
            })
        }),
        signUp: builder.mutation({
            query: (body) => ({
                url: '/user/signup',
                body,
                method: 'POST'
            })
        }),
        getRole: builder.query({
            query: () => '/user/role',
            providesTags: ['user']
        }),
        getAll: builder.query({
            query: (query) => `/users?page=1&limit=10&search=`,
            providesTags: ['user']
        }),
    })
})

export const {
    useGetAllQuery,
    useGetRoleQuery,
    useLoginMutation,
    useSignUpMutation
} = userApi