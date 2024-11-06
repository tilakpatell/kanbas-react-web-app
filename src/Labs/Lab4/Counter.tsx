import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="btn btn-success me-2">
        Up
      </button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger"
        id="wd-counter-down-click">
        Down
      </button>
<hr/></div>);}
