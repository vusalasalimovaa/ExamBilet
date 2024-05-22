import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/menu" }),
  endpoints: (builder) => ({
    getMenuById: builder.query({
      query: (id) => `/${id}`,
    }),
    getAllMenu: builder.query({
      query: () => `/`,
    }),
    deleteMenuById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    postMenu: builder.query({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),
    patchMenuById: builder.query({
      query: (id,{ obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
    putMenuById: builder.query({
        query: (id,{ obj }) => ({
          url: `/${id}`,
          method: "PUT",
          body: obj,
        }),
      }),
  }),
});

export const { useGetMenuByIdQuery, useGetAllMenuQuery } = menuApi;
