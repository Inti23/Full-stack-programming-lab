// CourseItem.js
import React from "react";

function CourseItem({ courseName, instructor, duration, type }) {

  const cardStyle = {
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "15px",
    padding: "20px",
    width: "220px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer"
  };

  const typeStyle = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    backgroundColor: type === "Online" ? "#6a11cb" : "#2575fc",
    color: "#fff",
    marginTop: "10px"
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
      }}
    >
      <h2 style={{ margin: "0 0 10px 0" }}>{courseName}</h2>
      <p style={{ margin: "5px 0" }}><strong>Instructor:</strong> {instructor}</p>
      <p style={{ margin: "5px 0" }}><strong>Duration:</strong> {duration}</p>
      <span style={typeStyle}>{type}</span>
    </div>
  );
}

export default CourseItem;