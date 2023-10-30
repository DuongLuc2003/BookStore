import {IProduct} from '../interfaces/product'
import { pause } from '../utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiHeaders } from '../utils/apiConfig'
const productApi = createApi({
    reducerPath: 'product',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
        fetchFn: async (url, options) => {
            if (options) {
              options.headers = getApiHeaders();
            }
            await pause(1000);
            return fetch(url, options);
          }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/product`,
            providesTags: ['Product']
        }),
        getProductById: builder.query<IProduct, number | string>({
            query: (_id) => `/product/${_id}`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number>({
            query: (_id) => ({
                url: `/product/${_id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/product`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/product/${product._id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useRemoveProductMutation,
    useAddProductMutation,
    useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;