import React, { useState } from "react";
import ClassComponent from "./components/CLassComponent02";
import FunctionalComponent from "./components/FunctionalComponent02";
import "./App.css";

function App() {
  const [change, setChange] = useState("Jens");

  return (
    <div className="app">
      <h1>Oefenen met Class components & Functional components</h1>

      <FunctionalComponent change={change} setChange={setChange} />

      <ClassComponent change={change} setChange={setChange} />
    </div>
  );
}

export default App;
