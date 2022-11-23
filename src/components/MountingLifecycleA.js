import React, { Component } from "react";
import MountingLifecycleB from "./MountingLifecycleB";

class MountingLifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("MountingLifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingLifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("MountingLifecycleA componentDidMount");
  }

  render() {
    console.log("MountingLifecycleA render");
    return (
      <div>
        <div>MountingLifecycleA</div>
        <MountingLifecycleB />
      </div>
    );
  }
}

export default MountingLifecycleA;
