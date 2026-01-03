import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import './login.css'; 

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (ev) => {
    const propertyName = ev.target.name;
    const propertyValue = ev.target.value;

    setForm((prevState) => ({
      ...prevState,
      [propertyName]: propertyValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED"); 
    try {
      await login({
        email: form.email,
        password: form.password,
      });

      navigate('/dashboard');

    } catch (err) {
      console.log('Login error :', err);
    }
  };

  const routeToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Welcome Back</h2>
        <p>Sign in to EchoVerse</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              value={form.email}
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={form.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <button type="submit" className="signin-btn">Login</button>
        </form>

        <div className="signin-footer">
          <p>
            Don&apos;t have an account?{' '}
            <span onClick={routeToSignup} style={{ cursor: 'pointer' }}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
