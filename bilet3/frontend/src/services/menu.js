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
    deleteMenuById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    postMenu: builder.mutation({
      query: ({ obj }) => ({
        url: `/`,
        method: "POST",
        body: obj,
      }),
    }),
    patchMenuById: builder.mutation({
      query: (id,{ obj }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: obj,
      }),
    }),
    putMenuById: builder.mutation({
        query: (id,{ obj }) => ({
          url: `/${id}`,
          method: "PUT",
          body: obj,
        }),
      }),
  }),
});

export const { useGetMenuByIdQuery, useGetAllMenuQuery, useDeleteMenuByIdMutation,usePostMenuMutation,usePatchMenuByIdMutation,usePutMenuByIdMutation } = menuApi;
