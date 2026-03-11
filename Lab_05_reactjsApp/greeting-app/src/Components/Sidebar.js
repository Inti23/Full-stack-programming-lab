// src/components/Sidebar.js
import React from "react";

function Sidebar() {
  const sidebarStyle = {
    width: "220px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    height: "calc(100vh - 60px)", // subtract navbar height
    paddingTop: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "fixed",
    top: "60px",
    left: 0
  };

  const linkStyle = {
    display: "block",
    padding: "12px 20px",
    color: "#fff",
    textDecoration: "none",
    marginBottom: "5px",
    borderRadius: "8px",
    transition: "background 0.3s",
    background: "transparent",
    border: "none",
    textAlign: "left",
    width: "100%",
    cursor: "pointer",
    fontSize: "1rem"
  };

  const links = ["Dashboard", "Greetings", "Settings", "Profile"];

  return (
    <div style={sidebarStyle}>
      {links.map((link, i) => (
        <button
          key={i}
          style={linkStyle}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#34495e"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          onClick={() => alert(`${link} clicked!`)} // placeholder click action
        >
          {link}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;