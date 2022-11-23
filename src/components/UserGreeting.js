import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // return (
    //   <div>
    //     <h1>Welcome Guest</h1>
    //     <h1>Welcome Vishwas</h1>
    //   </div>
    // );

    //(1.) USING IF-ELSE
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Vishwas</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
    //(2.) USING ELEMENT VARIABLE
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div> 
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    //(3.) USING TERNARY OPERATOR
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Vishwas</div> :
    //     <div>Welcome Guest</div>
    // )
    //(4.) USING SHORT CIRCUIT OPERATOR
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>
  }
}

export default UserGreeting;
