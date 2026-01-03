import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetchPostByIdQuery } from '../Services/api';
import './showPost.css'; //  import CSS

const ShowPost = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useFetchPostByIdQuery(id);

    const [form, setForm] = useState({
        title: '',
        content: '',
        image: ''
    });

     useEffect(() => {
        if (data) {
            setForm({
                title: data.title,
                content: data.content,
                image: data.imageUrl
            });
        }
    }, [id]);

    return (
        <div className="post-container">
            <div className="post-card">
                <h2 className="post-title">{form.title}</h2>
                <hr />
                <p className="post-content">{form.content}</p>
                {form.image && (
                    <div className="post-image-wrapper">
                        <img
                            className="post-image"
                            src={form.image}
                            alt={form.title || "Post image"}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowPost;