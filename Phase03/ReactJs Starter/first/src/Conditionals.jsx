import { useState } from "react";

export const Conditionals = () => {
  const [isVisible, setIsVisible] = useState(true);

  const students = [
    { id: 1, name: "Shivansh" },
    { id: 2, name: "Atul" },
    { id: 3, name: "Raj" },
  ];

  return (
    <section className="example-section">
      <h2>🔀 Conditionals & Lists</h2>

      {/* Ternary operator */}
      <div className="example-block">
        <h3>Ternary: {isVisible ? "🌙 Dark" : "☀️ Light"}</h3>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Theme</button>
      </div>

      {/* Short-circuit (&&) */}
      <div className="example-block">
        <h3>Short-circuit (&&)</h3>
        {isVisible && <p>✅ This shows only when Dark mode is ON</p>}
      </div>

      {/* Rendering a list with .map() */}
      <div className="example-block">
        <h3>List Rendering (.map)</h3>
        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
