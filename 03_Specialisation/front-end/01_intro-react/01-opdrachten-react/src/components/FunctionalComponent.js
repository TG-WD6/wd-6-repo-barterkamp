import React, { useState } from "react";

function FunctionalComponent() {
  const [input, setInput] = useState("");
  // de initial value van input is gelijkgesteld aan een lege string

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <form>
        <input type="text" onChange={onChangeHandler} />
      </form>
      <h3>Hello Function {input}</h3>
      {/* De huidige value van input wordt achter het woord */}
    </div>
  );
}

export default FunctionalComponent;
