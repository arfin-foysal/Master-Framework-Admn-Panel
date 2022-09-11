import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET'
       }),
      transformResponse: (res) => res.reverse(),
      providesTags: ["Post"],
    }),

    getPostById: builder.query({
      query: (id) => ({
          url:`posts/${id}`,
          method: 'GET',
          providesTags: ["Post"],
        })
      }),
      
    getPostByLimit: builder.query({
        query: (num) => {
         console.log("Limit Number:", num)
         return {
          url: `posts?_limit=${num}`,
          method: 'GET'
         }
        }
       }),
    
    createPost: builder.mutation({
       query: (newPost) => {
    console.log("Create Post: ", newPost)
    return {
     url: `posts`,
     method: 'POST',
     body: newPost,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   },
     
      invalidatesTags: ["Post"],
    }),
    

    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    
    
    deletePost: builder.mutation({
      query: (id) => ({
        url: `Posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

  }),
});

export const {
    useGetAllPostQuery,
    useGetPostByIdQuery,
    useGetPostByLimitQuery,
    useDeletePostMutation,
    useCreatePostMutation,
    useUpdatePostMutation
} = PostApi;