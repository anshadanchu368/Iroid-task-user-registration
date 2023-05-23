import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the fullName from local storage
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("fullName");
    navigate("/signin");
  };

  return (
    <div>
      <nav className="nav">
        <h2> {fullName ? `Hi! ${fullName}` : ""}!</h2>
        <button onClick={logout}>Logout</button>
      </nav>
  <div className="flex">

      <h3 className="name">Name your Organization</h3>
      <input className="text" type="text" placeholder="enter organization name"></input>

      <h3 className="select">Select your organization Type below</h3>

  </div>

      <div class="grid-container">
        <div class="grid-item">+</div>
        <div class="grid-item">construction</div>
        <div class="grid-item">education</div>
        <div class="grid-item">Consultancy</div>
        <div class="grid-item">Logistics</div>
        <div class="grid-item">Manufacturing</div>
        <div class="grid-item">Tourism</div>
        <div class="grid-item">It</div>
      </div>

      <button className="next">Next</button>
      
      <div className="n">

      <span className="item1"></span>
      <span ></span>
      <span></span>
      <span></span>
      <span></span>

      </div>
    </div>
  );
};

export default Home;
