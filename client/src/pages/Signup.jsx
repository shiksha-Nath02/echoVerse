import React from 'react';
import { useState } from 'react';
import { signup } from '../api/auth';
import { useNavigate } from "react-router-dom";
import './signup.css';



const Signup = () => {
  const[form, setform]= useState({
      username: "",
      email: "",
      password: "",

  });
  //usestae-> we want to chnge website content not just variable. hooks make it posiible; hooks for render
  //hooks-> enable us to change website visible content without refreshing page... used to make single pge application

  const navigate= useNavigate();

  const handleChange=({target: {name, value}})=>// destructuring syntex
    setform((f)=> ({...f, [name]: value}));//keep prev state same and chnage only for that name

  const handleSubmit= async(e)=>{
    e.preventDefault(); //no default page refresh
    try{
      console.log(form);
        await signup(form.username, form.email, form.password);
      navigate("/Dashboard");
    }catch(err){
      console.error("Signup error:", err);
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>EchoVerse</h2>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              value={form.username}
              name='username'
              onChange={handleChange}
              type="text" 
              placeholder='username' />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              value={form.email}
              name='email'
              onChange={handleChange} 
              type="text" 
              placeholder='email' />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              value={form.password}
              name='password'
              onChange={handleChange} 
              type="text" 
              placeholder='password' />
          </div>
            
          <button type='submit' className="signup-btn">signup</button>
        </form>

        <div className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

//information state ke though utha ske ya ref ke through... hmne state ke though uthaya hai
