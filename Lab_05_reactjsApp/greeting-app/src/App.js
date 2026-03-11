import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Greeting from "./Components/Greeting";

function App() {
  const mainStyle = {
    marginLeft: "220px", // sidebar width
    paddingTop: "60px", // navbar height
    padding: "20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const greetings = [
    { name: "Ali", timeOfDay: "morning", bgColor: "#ffeaa7" },
    { name: "Intizar Hussain", timeOfDay: "afternoon", bgColor: "#fab1a0" },
    { name: "Haider", timeOfDay: "evening", bgColor: "#81ecec" },
    { name: "Hassan", timeOfDay: "night", bgColor: "#a29bfe" }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <div style={mainStyle}>
        {greetings.map((greet, i) => (
          <Greeting
            key={i}
            name={greet.name}
            timeOfDay={greet.timeOfDay}
            bgColor={greet.bgColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;