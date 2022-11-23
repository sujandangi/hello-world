//import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  console.log(nameList)
  
  return <div>{nameList}</div>;
}

export default NameList;
