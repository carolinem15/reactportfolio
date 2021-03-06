import React from "react";
import { Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-transparent">
      <Link className="navbar-brand" to="/">
        Caroline Manson
      </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul> 
      </nav>
    </div>
  );
}

export default Navbar;