import React from "react";
import StudentCard from "./StudentCard";

function App() {

  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    padding: "40px"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  };

  const titleStyle = {
    textAlign: "center",
    color: "white",
    marginBottom: "40px",
    fontSize: "36px"
  };

  return (
    <div style={pageStyle}>

      <h1 style={titleStyle}>Student Information Dashboard</h1>

      <div style={containerStyle}>

        <StudentCard
          name="Intizar Hussain"
          rollNo="232010"
          department="Software Engineering"
          university="Air University"
          color="#d1f7c4"
        />

        <StudentCard
          name="Hassnain Haider"
          rollNo="232010"
          department="Software Engineering"
          university="Air University"
          color="#c4e1ff"
        />

        <StudentCard
          name="Usman Tariq"
          rollNo="21-IT-103"
          department="Information Technology"
          university="UET Lahore"
          color="#ffd6d6"
        />

        <StudentCard
          name="Hassan Raza"
          rollNo="21-CS-104"
          department="Computer Science"
          university="NUST University"
          color="#ffe4b5"
        />

        <StudentCard
          name="Ayesha Malik"
          rollNo="21-SE-105"
          department="Software Engineering"
          university="Punjab University"
          color="#e0c3fc"
        />

        <StudentCard
          name="Bilal Ahmed"
          rollNo="21-IT-106"
          department="Information Technology"
          university="UET Taxila"
          color="#b5ead7"
        />

      </div>

    </div>
  );
}

export default App;