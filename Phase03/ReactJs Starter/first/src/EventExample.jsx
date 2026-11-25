// Events Example - onClick, onChange, onSubmit

import { useState } from "react";

function EventExample() {
  const [name, setName] = useState("");

  // onClick handler
  const handleClick = () => {
    alert(`Hello, ${name || "World"}!`);
  };

  // onChange handler
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name:", name);
    alert(`Form submitted! Name: ${name}`);
  };

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h2>Events Example</h2>

      {/* onChange */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:{" "}
          <input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Type here..."
          />
        </label>
        <br /><br />

        {/* onClick */}
        <button type="button" onClick={handleClick}>
          Say Hello (onClick)
        </button>{" "}

        {/* onSubmit */}
        <button type="submit">Submit Form (onSubmit)</button>
      </form>

      <p>You typed: <strong>{name}</strong></p>
    </div>
  );
}

export default EventExample;
