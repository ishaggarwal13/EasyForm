import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate("/", { state: { formData } });
  };

  return (
    <div className="form-container">
      <div className="form-action">
        <h1 className="form-header"> Fill the form </h1>{" "}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="form-label"> Name: </label>{" "}
            <input
              tyoe="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>{" "}
          <div className="form-group">
            <label className="form-label"> Age: </label>{" "}
            <input
              tyoe="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>{" "}
          <div className="form-group">
            <label className="form-label"> Email: </label>{" "}
            <input
              tyoe="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>{" "}
          <div className="form-group">
            <label className="form-label"> Address: </label>{" "}
            <input
              tyoe="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>{" "}
          <button type="submit" className="form-button">
            {" "}
            Submit{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default FormAction;
