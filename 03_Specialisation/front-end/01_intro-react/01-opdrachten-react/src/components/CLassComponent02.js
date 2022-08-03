import React, { Component } from "react";

class ClassComponent extends Component {
  constructor({ props }) {
    super(props);
  }

  render() {
    // onChangeHandler function
    const onChangeHandler = (e) => {
      this.props.setChange(e.target.value);
    };

    return (
      <div>
        <h2>Class component</h2>
        <form>
          <input
            type="text"
            value={this.props.change}
            onChange={onChangeHandler}
            // De setState heeft altijd een object nodig als parameter
          />
        </form>
        <h3>Hello Class {this.props.change}</h3>
        {/* zodra je iets in de input field typt wordt de oorspronkelijke state geupdated met de waarde uit setState */}
      </div>
    );
  }
}

export default ClassComponent;
