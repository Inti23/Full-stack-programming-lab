import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Counter App</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button 
            className="btn increment" 
            onClick={() => setCount(count + 1)}
          >
             Increment
          </button>

          <button 
            className="btn decrement" 
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
             Decrement
          </button>

          <button 
            className="btn reset" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;