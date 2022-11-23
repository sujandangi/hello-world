import React from 'react'

//(2.) Using Inline css
const heading = {
    fontSize: '72px', //Property in camelCase separated by comma
    color: 'blue'
}

function InlineStyle() {
  return (
    <div>
        <h1 style={heading}>Inline CSS</h1>

      
    </div>
  )
}

export default InlineStyle