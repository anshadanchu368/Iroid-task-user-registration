import React, { useState } from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        fullName,
        email,
        password,
      });
      console.log('Signup response:', response.data);
      // Handle successful signup, such as redirecting to another page
    } catch (error) {
      console.error('Failed to signup:', error.response);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  const redirectToLogin=()=>{
       navigate('/signin')
  }

  return (
    <div>
      <nav>
        <p>Already have an account?</p>
        <button onClick={redirectToLogin}>Log in</button>
      </nav>

      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;