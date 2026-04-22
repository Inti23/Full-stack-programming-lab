// src/components/Navbar.js
import React from "react";

function Navbar() {
  const navStyle = {
    height: "60px",
    width: "100%",
    backgroundColor: "#4b6cb7",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  };

  return (
    <div style={navStyle}>
      <h2>Dynamic Greeting Dashboard</h2>
      <span>Hello, User!</span>
    </div>
  );
}

export default Navbar;