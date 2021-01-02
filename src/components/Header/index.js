import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="hero text-center">
        <h1>Caroline Manson</h1>
        <h2>{props.children}</h2>
    </div>
  );
}

export default Header;
