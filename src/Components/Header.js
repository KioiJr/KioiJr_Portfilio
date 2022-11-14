import React from 'react';
import ReactTyped from 'react-typed';
const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info' id='homepage'>
            <div>
             <ReactTyped
            className='main-typed-text'
            strings={["Hello,","I'm Joshua Mutunga.","Services offered include: "]}
            typeSpeed= {40}
            backSpeed = {30}
            /> 
            </div>
             <ReactTyped
            className='typed-text'
            strings={["Web Design","Java Developer","Graphic Design","Web Development"]}
            startDelay={5900}
            typeSpeed= {40}
            backSpeed = {60}
            loop 
             /> 
            < a href='#contact' className='btn-main-offer'>contact me
            </a>
        </div>
    </div>
  )
}

export default Header;