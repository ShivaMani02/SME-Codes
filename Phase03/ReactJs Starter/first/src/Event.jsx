import { useState } from "react";

export const Event = () => {
  const [text, setText] = useState("");

  // onClick - see the event object in console
  function handleClick(event) {
    console.log("Event object:", event);
    console.log("Target element:", event.target);
    alert("Button clicked! Check console for event details.");
  }

  // onChange - capture input value
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <section className="example-section">
      <h2>🎯 Events Example</h2>

      {/* onClick */}
      <div className="example-block">
        <h3>onClick Event</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* onChange */}
      <div className="example-block">
        <h3>onChange Event</h3>
        <input
          type="text"
          placeholder="Type something..."
          onChange={handleChange}
        />
        <p>You typed: <strong>{text}</strong></p>
      </div>
    </section>
  );
};
