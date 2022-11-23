import React from 'react'

function Child(props) {
  return (
    <div><button onClick={() => props.clickHandler('child')}>Child Component</button></div>
  )
}

export default Child