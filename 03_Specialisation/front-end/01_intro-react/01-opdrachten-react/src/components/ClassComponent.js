import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  render() {
    // onChangeHandler function
    const onChangeHandler = (e) => {
      this.setState({ input: e.target.value });
    };

    return (
      <div>
        <h2>Class component</h2>
        <form>
          <input
            type="text"
            onChange={onChangeHandler}
            // De setState heeft altijd een object nodig als parameter
          />
        </form>
        <h3>Hello Class {this.state.input}</h3>
        {/* zodra je iets in de input field typt wordt de oorspronkelijke state geupdated met de waarde uit setState */}
      </div>
    );
  }
}

export default ClassComponent;
