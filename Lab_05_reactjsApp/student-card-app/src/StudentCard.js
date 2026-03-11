import React from "react";

function StudentCard(props) {
  const cardStyle = {
    backgroundColor: props.color,
    padding: "20px",
    borderRadius: "12px",
    width: "260px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center"
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#333" }}>{props.name}</h2>

      <p><strong>Roll No:</strong> {props.rollNo}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>University:</strong> {props.university}</p>
    </div>
  );
}

export default StudentCard;