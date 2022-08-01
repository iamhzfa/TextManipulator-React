import React from 'react'

function Alert(props) {

  const capitalize = (word) => {
    let text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div style={{height:"50px"}}>
    {props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
