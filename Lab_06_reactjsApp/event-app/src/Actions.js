import React, { useState } from "react";
import "./Actions.css";

function Actions() {
  const [message, setMessage] = useState("");
  const [bgColor, setBgColor] = useState("#667eea");
  const [hover, setHover] = useState(false);

  // Change background color randomly
  const changeColor = () => {
    const colors = ["#ff6b6b", "#6bcB77", "#4d96ff", "#f7b801", "#9d4edd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="app" style={{ background: bgColor }}>
      <div className="card">
        <h1
          className="title"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{ color: hover ? "#ffdd57" : "white" }}
        >
          ⚡ Interactive Actions
        </h1>

        <div className="buttons">
          <button
            className="btn"
            onClick={() => setMessage("🎉 Welcome! Button clicked successfully.")}
          >
            Show Message
          </button>

          <button className="btn" onClick={changeColor}>
            Change Background
          </button>

          <button
            className="btn"
            onClick={() => alert("🚀 This is an alert message!")}
          >
            Show Alert
          </button>
        </div>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Actions;