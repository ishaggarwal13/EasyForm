import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  //defining inistal user state
  const [formData, setFormData] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  return (
    <div className="home">
      <h1 className="home-header"> Welecome to the Home Page </h1>{" "}
      <div className="user-details">
        <h2> User Details: </h2> <p> Name: {formData.name} </p>{" "}
        <p> Age: {formData.age} </p> <p> Email: {formData.email} </p>{" "}
        <p> Address: {formData.address} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
