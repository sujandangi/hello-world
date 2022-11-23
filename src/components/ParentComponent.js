import React, { Component } from 'react'
import Child from './Child'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Parent"
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(childProp) {
    alert(`Hello to ${this.state.parentName} from ${childProp}!! How are you Parent?`)
  }
  
    render() {
    return (
      <div> <Child name="Child" clickHandler={this.clickHandler}/> </div>
    )
  }
}

export default ParentComponent