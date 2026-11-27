import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import UseStateExample from "./UseStateExample.jsx";
import { Event } from "./Event.jsx";
import { Conditionals } from "./Conditionals.jsx";
import Form from "./Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <div className="container">
      <Conditionals />
      <App title="Iphone" desc="Phone Iphone 16" price="100000" />
      <App title="Samsung" desc="Phone Samsung Ultra" price="105000" />
      <App title="Oppo" desc="Phone Oppo Cam" />
      <UseStateExample />
      <Event />
      <Form />
    </div>
    <Footer />
  </StrictMode>
);
