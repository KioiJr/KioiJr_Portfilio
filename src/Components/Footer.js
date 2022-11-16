import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer col-12'>
        <a href='tel:+254799285882'><FontAwesomeIcon icon={faPhone}/>    +254 799 285882</a><br></br>
        <a href='tel:+254784475699'><FontAwesomeIcon icon={faPhone}/>    +254 784 475699</a><br></br>
        <a href='mailto:mutungajoshua13@gmail.com'><FontAwesomeIcon icon={faEnvelope}/> mutungajoshua13@gmail.com</a>
        <hr className="w-75 mx-auto"/>
        <p><FontAwesomeIcon icon={faCopyright} color='white'/> Copyright 2022 by Joshua Mutunga</p>
    </div>
  )
}

export default Footer