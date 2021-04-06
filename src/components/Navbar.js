import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mywrapper">
        <a href="" className="navbar-brand active">
          <span className="grey-color"> &lt;</span>
          <span className="logoname">Kristina Iankovskaia</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#a1cae2"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="#aboutme">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myportfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactme">Contact</a>
            </li>
            </ul>
        </div>
      
      </nav>

    )

}

export default Navbar
