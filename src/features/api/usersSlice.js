import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 2) => `users?page=${page}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersSlice;
