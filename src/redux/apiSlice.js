import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const apiBaseUrl = "http://localhost:3030"

export const catalogApi = createApi({
    reducerPath:'catalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiBaseUrl,
        prepareHeaders: (headers)=>{
            headers.set('Content-Type','application/json')
            headers.set('Accept','application/json')
            return headers
        },
    }),
    endpoints: (build)=>({
        getProducts: build.query({
            query: () =>'/api/products',
        }),
        getProduct: build.query({
            query: (id) =>`/api/products/${id}`,
        }),
    })
})

export const {useGetProductsQuery,useGetProductQuery} = catalogApi