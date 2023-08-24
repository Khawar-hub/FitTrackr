import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./urls";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
    getProductDetail: builder.query({
      query: (data) => {
        return {
          url: `products/${data}`,
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetProductsQuery, useGetProductDetailQuery } = productsApi;
