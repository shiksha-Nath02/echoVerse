import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api= createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4444/api",
        prepareHeaders: (headers, {getState})=>{
            //cookie sent automatically
            return headers;
        },
        credentials: 'include',
    }),

    tagTypes: ['Post', 'User'],
    endpoints: (builder)=>({

        // fetchUser: builder.query({
        //     query: ()=>'/auth/me',
        //     providersTags: ['User'],
        // }),

        fetchPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Post'],
        }),

        fetchUser: builder.query({
            query: () => '/auth/me',
            providesTags: ['User'],
        }),


        fetchPostById: builder.query({
            query: (id)=> `/posts/${id}`,
            providesTags: ['Post'],
        }),

        createPost: builder.mutation({
            query: (formData) => ({ url: '/posts', method: 'POST', body: formData }),
            invalidatesTags: ['Post'],
        }),


        fetchPostsByUserId: builder.query({
            query: () => `/posts/user`,
            providesTags: ["Post"],
        }),

        editPost: builder.mutation({
            query: ({ id, title, content }) => ({ url: `/post/${id}`, method: "PUT", body: { title, content } }),
            invalidatesTags: ["Post"]

        }),

        deletePost: builder.mutation({
            query: (id) => ({ url: `/post/${id}`, method: 'DELETE' }),
            invalidatesTags: ['Post'],
        }),



    })
})

export const{
    useFetchUserQuery,
    useCreatePostMutation,
    useFetchPostsQuery,
    useFetchPostByIdQuery,
    useFetchPostsByUserIdQuery,
    useDeletePostMutation,
    useEditPostMutation,
}= api;