import React from "react";

// function Greet() {
//     return <h1>Hello React Greet component</h1>
// }

//convention is to use arrow function

const Greet = (props) => {
  return (
    <>
      <h1>
        Greet {props.name}!!
      </h1>
      {props.children}
    </>
  );
};

export default Greet;
