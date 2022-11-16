import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import {faLocation} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div id='experience'>
      <div className="post-heading text-center">
                <h3 className="display-5 font-weight-bold">Experience</h3>
                <hr className="w-50 mx-auto pb-5"/>
                <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><FontAwesomeIcon icon={faLocation} color ='green'/> Diani Reef Beach Resort and Spa</h5>
                                <h6><FontAwesomeIcon icon={faCalendar} color ='green'/> January - April 2021</h6>
                            </div>
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                      </div>
                </div>
      </div>
    </div>
  )
}


export default Experience;