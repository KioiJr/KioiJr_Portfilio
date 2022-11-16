import React from 'react';
import { useState } from 'react';
import andromeda from '../Andromedamovies.png';
import { Navigate } from 'react-router-dom';

const movie = () => {

  return (
    <div>
      <div className=" col-12">
        <div className="card">
          <img src={andromeda} className="card-img-top" alt=""/>
            <div className="card-body">
              <h6 className="card-title"> Movie Place</h6>
            </div>
            
        </div>
      </div>
  </div>
  )
}

export default movie