import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./urls";

export const workOutApi = createApi({
  reducerPath: "workout",
  // baseQuery: fetchBaseQuery({
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = "Example";
  //     if (token) {
  //       headers.set("authorization", "Bearer " + token);
  //     }
  //     return headers;
  //   },
  // }),
  tagTypes: ["WorkOut"],
  endpoints: (builder) => ({
    getWorkOut: builder.mutation({
      query: (data) => {
        return {
          url: url + "products/1",
          method: "GET",
          body: data,
        };
      },
    }),
  }),
});
export const { useGetWorkOutMutation } = workOutApi;
