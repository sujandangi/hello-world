import React, { Component } from "react";

class UpdatingLifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
    console.log("UpdatingLifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("UpdatingLifecycleB getDerivedStateFromProps")
    return null
  }

  shouldComponentUpdate() {
    console.log("UpdatingLifecycleB shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("UpdatingLifecycleB getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("UpdatingLifecycleB componentDidUpdate")
  }

  render() {
    console.log("UpdatingLifecycleB render")
    return <div>UpdatingLifecycleB </div>;
  }
}

export default UpdatingLifecycleB;
