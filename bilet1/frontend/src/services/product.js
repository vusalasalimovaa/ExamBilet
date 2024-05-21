import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/products" }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),

    getAllProducts: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetAllProductsQuery } = productApi;
