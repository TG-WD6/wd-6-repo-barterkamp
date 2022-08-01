import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Oefenen met Class components & Functional components</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
