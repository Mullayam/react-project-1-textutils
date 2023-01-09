import React from "react";
import logo from '../logo.svg' ;
 

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
          <a className="navbar-brand" to="/">
              <img src={logo}  width="30" height="24"  className="d-inline-block align-text-top"/>
              {props.title}
              </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
              <li className="nav-item mx-2">
                <a className="nav-a" href="#">{props.about}</a>
              </li>
              
              <li className="nav-item mx-2">
                <a className="nav-a disabled">{props.contact}</a>
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
