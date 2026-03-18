import React, { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name === "" || user.email === "") {
      alert("Please fill all fields");
      return;
    }

    setSubmittedData(user);

    // Clear fields
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="app">
      <div className="form-card">
        <h1>User Registration</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </div>

      {submittedData && (
        <div className="result-card">
          <h2>📋 Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;