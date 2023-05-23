import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [fullName, setFullName] = useState('');
  const navigate=useNavigate()

  useEffect(() => {
    // Retrieve the fullName from local storage
    const storedFullName = localStorage.getItem('fullName');
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  const logout =()=>{
    localStorage.removeItem('fullName');
    navigate('/signin'); 
  }

  return (
    <div>
      <h2> {fullName ? `Hi! ${fullName}` : ''}!</h2>
      <button onClick={logout}>Logout</button>
      
    </div>
  );
};

export default Home;
