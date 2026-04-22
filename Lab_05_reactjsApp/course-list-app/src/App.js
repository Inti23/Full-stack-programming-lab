import React from "react";
import './App.css';
import CourseItem from "./CourseItem";

function App() {

  const courses = [
    { courseName: "Full Stack Programming", instructor: "Sir Sharif Hussain", duration: "3 Months", type: "Online" },
    { courseName: "Data Structures", instructor: "Sir Adnan Aslam", duration: "4 Months", type: "Offline" },
    { courseName: "Machine Learning", instructor: "Usman Tariq", duration: "5 Months", type: "Online" },
    { courseName: "Database Systems", instructor: "Hassan Raza", duration: "3 Months", type: "Offline" },
    { courseName: "Software Engineering", instructor: "Ayesha Malik", duration: "4 Months", type: "Online" }
  ];

  const pageStyle = {
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
  };

  return (
    <div style={pageStyle}>

      <h1 style={headerStyle}>
        Course List Dashboard
      </h1>

      <div style={containerStyle}>
        {courses.map((course, index) => (
          <CourseItem
            key={index}
            courseName={course.courseName}
            instructor={course.instructor}
            duration={course.duration}
            type={course.type}
          />
        ))}
      </div>

    </div>
  );
}

export default App;