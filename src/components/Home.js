import React, { useEffect, useState } from 'react';

const Home = () => {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    // Retrieve the fullName from local storage
    const storedFullName = localStorage.getItem('fullName');
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  return (
    <div>
      <h2> {fullName ? `Hi ${fullName}` : ''}!</h2>
      {/* Rest of your home component */}
    </div>
  );
};

export default Home;
