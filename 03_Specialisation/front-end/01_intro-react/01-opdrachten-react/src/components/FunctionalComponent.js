import React, { useState } from "react";

function FunctionalComponent() {
  const [input, setInput] = useState("");
  // de initial value van input is gelijkgesteld aan een lege string

  return (
    <div>
      <h2>Functional Component</h2>
      <form>
        <input
          type="text"
          onChange={(e) => {
            return setInput(e.target.value);
            // de value van input wordt via setInput gelijkgesteld aan de value die wordt ingevoerd in de input.
          }}
        />
      </form>
      <h3>Hello Function {input}</h3>
      {/* De huidige value van input wordt achter het woord */}
    </div>
  );
}

export default FunctionalComponent;
