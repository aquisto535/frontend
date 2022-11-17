import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { number: 0 };
  }

  render() {
    const { number } = this.state; //객체에 속한 속성 그대로 대입.

    return (
      <div>
        <h1>{number}</h1>

        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
