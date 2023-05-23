import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password,
        
      });
      
      // Handle successful signin, such as storing a token in local storage
      console.log('Signin successful:', response.data);
      const {fullName}=response.data;
      localStorage.setItem('fullName',fullName);
      navigate('/Home')

    } catch (error) {
      // Handle signin error, such as displaying an error message to the user
      console.error('Failed to signin:', error.response.data);
    }
  };
  
  const redirectToSignup=()=>{
      navigate('/');
  }
  return (
    <div>
       <nav>
        <p>Create a new  account?</p>
        <button onClick={redirectToSignup}>SIgn Up</button>
      </nav>

      <h2>Signin Page</h2>
      <form onSubmit={handleSignin}>
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
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default SigninPage;
