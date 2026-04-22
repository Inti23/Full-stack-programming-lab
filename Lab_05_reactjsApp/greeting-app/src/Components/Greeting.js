// Greeting.js
import React from "react";

function Greeting({ name, timeOfDay, bgColor }) {
  // Determine message based on timeOfDay
  let message = "";

  switch(timeOfDay.toLowerCase()) {
    case "morning":
      message = "Good Morning";
      break;
    case "afternoon":
      message = "Good Afternoon";
      break;
    case "evening":
      message = "Good Evening";
      break;
    case "night":
      message = "Good Night";
      break;
    default:
      message = "Hello";
  }

  // Card style with dynamic background color
  const cardStyle = {
    backgroundColor: bgColor || "#f0f0f0",
    padding: "20px",
    borderRadius: "12px",
    color: "#333",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    margin: "10px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  return (
    <div style={cardStyle}>
      <h2>{message}, {name}!</h2>
      <p>Have a great {timeOfDay}!</p>
    </div>
  );
}

export default Greeting;