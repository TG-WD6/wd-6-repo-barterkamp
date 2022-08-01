import React, { useState } from "react";
import ClassComponent from "./components/ClassComponent01";
import FunctionalComponent from "./components/FunctionalComponent01";
import "./App.css";

function App() {
  const [change, setChange] = useState("");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  return (
    <div className="app">
      <h1>Oefenen met Class components & Functional components</h1>
      <input type="text" onChange={handleChange} />
      <FunctionalComponent input={change} />
      <ClassComponent input={change} />
    </div>
  );
}

export default App;
