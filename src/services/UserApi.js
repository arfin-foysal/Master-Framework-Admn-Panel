import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
    reducerPath: "UserApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/"
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
      
        getUser: builder.query({
            query: () => ({
                url: "users/me",
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }

            }),
            invalidatesTags: ["User"],
        }),
        getAllUser: builder.query({
            query: () => ({
                url: "users",
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["User"],
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `users/${id}`,
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["User"],
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: `users`,
                method: "POST",
                body: newUser,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["User"],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...user }) => ({
                url: `users/${id}`,
                method: "PUT",
                body: user,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }

            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["User"],
        }),
    }),
}
);
export const {
    useCreateUserMutation,
    useDeleteUserMutation,
    useGetAllUserQuery,
    useGetUserByIdQuery,
    useGetUserQuery,
    useUpdateUserMutation
} = UserApi;

// Compare this snippet from src\services\AuthApi.js:

