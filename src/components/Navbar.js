import React, { Component } from 'react'
import {
  // Link,
  NavLink
} from "react-router-dom";


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav activeClassName="active" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div activeClassName="active" className="container-fluid">
            <NavLink exact activeClassName="active" className="navbar-brand" to="/">NewsMayhem</NavLink>
            <button activeClassName="active" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span activeClassName="active" className="navbar-toggler-icon"></span>
            </button>
            <div activeClassName="active" className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul activeClassName="active" className="navbar-nav me-auto mb-2 mb-lg-0">
                <li activeClassName="active" className="nav-item">
                <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                {/* <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/About">About</NavLink>
                </li> */}
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/business">Business</NavLink>
                </li>
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/entertainment">Entertainment</NavLink>
                </li>
                {/* <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/general">General</NavLink>
                </li> */}
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/health">Health</NavLink>
                </li>
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/science">Science</NavLink>
                </li>
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/sports">Sports</NavLink>
                </li>
                <li activeClassName="active" className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/technology">Technology</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}
