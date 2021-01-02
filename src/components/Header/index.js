import React from "react";
import "./style.css";
import background from "../public/background.jpeg"

function Header(props) {
  return (
    <div className="hero text-center" style={{
      backgroundImage: `url(${background})`,
      }}>
        <h1>Caroline Manson</h1>
        <h2>{props.children}</h2>
    </div>
  );
}

export default Header;
