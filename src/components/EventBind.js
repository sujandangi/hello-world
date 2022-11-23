import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //(3.)This is recommended binding method
    //   this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //     this.setState({
  //         message: "Goodbye!"
  //     })
  //     console.log(this)

  //(4.)Simply use arrow function
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
    console.log(this)
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Binding in render: may have performance implications*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
