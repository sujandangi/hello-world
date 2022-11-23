import React, { Component } from "react";

class MountingLifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("MountingLifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("MountingLifecycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("MountingLifecycleB componentDidMount")
  }

  render() {
    console.log("MountingLifecycleB render")
    return <div>MountingLifecycleB </div>;
  }
}

export default MountingLifecycleB;
