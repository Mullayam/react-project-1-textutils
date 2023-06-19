import React from "react";
import logo from '../logo.svg' ;
 import { Link } from "react-router-dom";

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">
              <img src={logo}  width="30" height="24"  alt="logo" className="d-inline-block align-text-top"/>
              {props.title}
              </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
            
              
              <li className="nav-item mx-2">
                <Link className="nav-a disabled" to="/contacts">{props.contact}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
              <input onClick={props.toggleMode} className="form-check-input" type="checkbox"  />
              <label className="mx-2">Change Mode</label>
                  </div>
          </div>
        </div>
      </nav>
        
    );
}
 
Navbar.defaultProps = {
  title:"SiteName",
  about:"About",
  contact:"Contact",
}
