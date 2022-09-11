import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
    reducerPath: "AuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/api/v1/"
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (newUser) => ({
                    url: `auth/signup`,
                    method: "POST",
                body: newUser,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }   
            }),
            invalidatesTags: ["Auth"],
        }),
        login: builder.mutation({
            query: (newUser) => ({
                url: `auth/signin`,
                method: "POST",
                body: newUser,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["Auth"],
        }),
        
        logout: builder.mutation({
            query: () => ({
                url: `auth/logout`,
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});
export const {
    useSignupMutation,
    useLoginMutation,
    useLogoutMutation,
}=AuthApi;
