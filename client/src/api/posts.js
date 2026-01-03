import axios from "axios";

const api= axios.create({
    baseURL: "http://localhost:4444/api/posts",
    withCredentials: true,
});

export const fetchPost=()=> api.get('/');
export const createPost=(post)=>api.post('/', post);


// export const fetchPosts=()=>api.get('/');
//export const fetchPost=(id)=>api.get(`/${id}`);
// export const fetchPostByUserID=()=>api.get("/user");
// export const createPost=({title,content})=>api.post('/',{title,content});
// export const updatePost = (id,title,content) => api.put(`/${id}`, {title,content});
//export const deletePost = (id) => api.delete(`/${id}`);