import React from 'react';
import hides from "../Hm&S.png"
import hosp from "../Hospital.png"
import cal from "../Calculator.png"
import Login from "../Login.png"
import Registration from "../RegForm.jpg"
import Andromeda from "../Andromeda.png"


const Projects = () => {
  return (
    <div id="project" className="container mt-3 pb-5">
            <div className="post-heading text-center">
                <h3 className="display-5 font-weight-bold">Projects</h3>
                <hr className="w-50 mx-auto pb-5"/>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title">Hospital Management System</h6>
                            </div>
                            <img src= {hosp} className="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">                          
                            <div className="card-body">
                                <h6 className="card-title">Basic Calculator</h6>     
                            </div>
                            <img src={cal} className="card-img-top" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">                           
                            <div className="card-body">
                                <h6 className="card-title">Login Form</h6>
                            </div>
                            <img src={Login} className="card-img-top" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title"> Movie Place</h6>
                            </div>
                            <img src={Andromeda} className="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                           
                            <div className="card-body">
                                <h6 className="card-title">Registration Form</h6>
                            </div>
                            <img src={Registration} className="card-img-top" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title">Hides and Skins Management System</h6>
                            </div>
                            <img src={hides} className="card-img-top" alt=""/>
                        </div>
                    </div>
        
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title">Login form</h6>
                            </div>
                            <img src={Login} className="card-img-top" alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

  )
}

export default Projects