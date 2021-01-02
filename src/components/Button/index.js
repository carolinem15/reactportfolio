import React from "react";

function Button(props) {
  return <div className="Button" style={props.style}>{props.children}</div>;
}

export default Button;