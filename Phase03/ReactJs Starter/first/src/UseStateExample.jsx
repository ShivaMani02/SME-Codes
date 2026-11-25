// useState Examples - Simple Counter & Toggle

import { useState } from "react";

function UseStateExample() {
  // Example 1: Counter
  const [count, setCount] = useState(0);

  // Example 2: Toggle visibility
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "1rem", border: "2px solid blue", margin: "1rem" }}>
      <h2>useState Examples</h2>

      {/* Counter */}
      <div style={{ marginBottom: "1rem" }}>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
        <button onClick={() => setCount(count - 1)}>Decrement</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* Toggle */}
      <div>
        <h3>Toggle Visibility</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>👋 Hello! I am visible right now.</p>}
      </div>
    </div>
  );
}

export default UseStateExample;
