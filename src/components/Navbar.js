import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        
    <div className='container'>
<a className="navbar-brand" href="#homepage"><img className='logo' src={''} alt="logo..." />
        
</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <FontAwesomeIcon icon = {faDesktop}/>
    </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#project">projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">contact me</a>
                </li>
            </ul>
          </div>
 </div>
</nav>
  )
}

export default Navbar