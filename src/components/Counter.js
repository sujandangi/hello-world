import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState((prevState, props) => ({
        count: prevState.count - 1
    }))
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  byfive() {
    // this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()

  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
        <button onClick={() => this.byfive()}>byfive</button>
      </div>
    );
  }
}

export default Counter;
