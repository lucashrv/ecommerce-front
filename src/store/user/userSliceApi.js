import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../utils/apiBaseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery,
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getRole: builder.query({
            query: () => '/user/role',
            providesTags: ['User']
        }),
        getAll: builder.query({
            query: ({ page, limit = 10, search }) =>
                `/users?page=${page}&limit=${limit}&search=${search}`,
            providesTags: ['Users']
        }),
        getOne: builder.query({
            query: ({ id }) =>
                `/user/${id}`,
            providesTags: ['User']
        }),
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
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const {
    useGetAllQuery,
    useGetRoleQuery,
    useLoginMutation,
    useSignUpMutation,
    useDeleteUserMutation,
    useGetOneQuery
} = userApi