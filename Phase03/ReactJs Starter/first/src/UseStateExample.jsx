import { useState } from "react";

function UseStateExample() {
  // Example 1: Counter
  const [count, setCount] = useState(0);

  // Example 2: Toggle visibility
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="example-section">
      <h2>🔢 useState Examples</h2>

      {/* Counter */}
      <div className="example-block">
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
        <button onClick={() => setCount(count - 1)}>Decrement</button>{" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* Toggle */}
      <div className="example-block">
        <h3>Toggle Visibility</h3>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && <p>👋 Hello! I am visible right now.</p>}
      </div>
    </section>
  );
}

export default UseStateExample;
