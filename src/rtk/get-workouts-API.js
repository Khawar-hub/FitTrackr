import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./urls";

export const workOutApi = createApi({
  reducerPath: "workout",
  baseQuery: fetchBaseQuery({
    baseUrl: url
  }),
  tagTypes: ["WorkOut"],
  endpoints: (builder) => ({
    getWorkOut: builder.query({
      query: (data) => {
        return {
          url: "products",
          method: "GET",
          body: data,
        };
      },
    }),
  }),
});
export const { useGetWorkOutQuery } = workOutApi;
