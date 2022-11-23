import React, { Component } from "react";
import UpdatingLifecycleB from "./UpdatingLifecycleB";

class UpdatingLifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("UpdatingLifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("UpdatingLifecycleA getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("UpdatingLifecycleA shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UpdatingLifecycleA getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("UpdatingLifecycleA componentDidUpdate")
  }

  //since update is possible when either state or props have changed
  changeState = () => {
    this.setState({
      name: 'Codevolution'
    })
  }

  render() {
    console.log("UpdatingLifecycleA render");
    return (
      <div>
        <div>UpdatingLifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <UpdatingLifecycleB />
      </div>
    );
  }
}

export default UpdatingLifecycleA;
