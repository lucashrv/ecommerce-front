import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../utils/apiBaseQuery';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery,
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['products'],
      // transformResponse: (res) => {
      //   return res.reverse()
      // }
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '/products',
        body,
        method: 'POST'
      }),
      invalidatesTags: ['products']
    }),
    updateProduct: builder.mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        body,
        method: 'PUT'
      }),
      invalidatesTags: ['products']
    }),
    destroyProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        body,
        method: 'DELETE'
      }),
      invalidatesTags: ['products']
    }),
  })
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDestroyProductMutation
} = productsApi