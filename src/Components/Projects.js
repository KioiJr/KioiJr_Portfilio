import React from 'react';
import { Navigate } from 'react-router-dom'
import hides from "../Hides&Skins.png"
import andromeda from "../Andromedamovies.png";
import hosp from "../Hospital.png";


const Projects = () => {

    // const [goToMovie, setGoToMovie] = React.useState(false);
    // const [goToHosp, setToHosp] = React.useState(false);
    // const [goToHides, setToHides] = React.useState(false);

    // if(goToMovie){
    //     return <Navigate to = "./Movie" />
    // }
    // if (goToHosp){
    //     return <Navigate to = "./Hospital" />
    // }
    // if (goToHides){
    //     return <Navigate to = "./Hides" />
    // }
  
    
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
                            
                            {/* <button className='readMore'onClick={()=>{setToHosp(true)}}>Read more</button> */}
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title"> Movie Place</h6>
                            </div>
                            <img src={andromeda} className="card-img-top" alt=""/>
                            {/* <button onClick={() => {setGoToMovie(true); }}>
                                Read More</button> */}
			  			</div> 
                        </div>
                    
        
                    <div className="col-lg-4 col-md-6 col-12 pb-5">
                        <div className="card">
                            
                            <div className="card-body">
                                <h6 className="card-title">Hides and Skins Management System</h6>
                            </div>
                            <img src={hides} className="card-img-top" alt=""/>
                            {/* <button onClick={()=>{setToHides(true)}}>Read more</button> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
  )
}

export default Projects