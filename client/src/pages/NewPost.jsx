
import React, { useState } from 'react';
// import { createPost } from '../../../backend/controllers/postCtrl';
import { createPost } from '../api/posts'

import { useNavigate } from 'react-router-dom';
import './newPost.css';

const NewPost = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: '',
        content: '',
    });

     const handleChange = ({ target }) => {
        setForm((prevData) => ({
            ...prevData,
            [target.name]: target.value,
        }));
    };
 
    const handleSubmit= async(e) =>{
        e.preventDefault();
        console.log("shiksha");
        await createPost({title: form.title, content: form.content});
        navigate("/Dashboard");
    };

  return (
    <div className="newpost-container">
    <h1 className="newpost-title">Add New Post</h1>

    <form className="newpost-form" onSubmit={handleSubmit}>

        <input 
        onChange={handleChange}
        name="title"
        type="text"
        value={form.title}
        placeholder="Enter title"
        />

        <textarea 
        onChange={handleChange}
        name="content"
        type="text"
        value={form.content}
        placeholder="Enter content"
        />
        <button type="submit">AddPost</button>
    </form>
    </div>
  );
};

export default NewPost;