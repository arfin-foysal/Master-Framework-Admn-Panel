
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const RoleApi = createApi({
    reducerPath: "RoleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/v1/"
    }),
    tagTypes: ["Role"],
    endpoints: (builder) => ({
        getAllRole: builder.query({
            query: () => ({
                url: "roles",
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }

            }),
            invalidatesTags: ["Role"],
        }),
        getRoleById: builder.query({
            query: (id) => ({
                url: `roles/${id}`,
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                } 


            }),
            invalidatesTags: ["Role"],

        }),
        createRole: builder.mutation({
            query: (newRole) => ({
                url: `roles`,
                method: "POST",
                body: newRole,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["Role"],
        }),
        updateRole: builder.mutation({
            query: ({ id, ...role }) => ({
                url: `roles/${id}`,
                method: "PUT",
                body: role,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["Role"],
        }),
        deleteRole: builder.mutation({
            query: (id) => ({
                url: `roles/${id}`,
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }),
            invalidatesTags: ["Role"],
        }),

    }),
})

export const {
    useCreateRoleMutation,
    useUpdateRoleMutation,
    useDeleteRoleMutation,
    useGetAllRoleQuery,
    useGetRoleByIdQuery,
}=RoleApi;
