import React from 'react'
import profile from "../passport.jpeg"

const Body = () => {
  return (
    <div className='container-fluid'>
        <div className='text modal-body row-fluid' id='about'>
          <h2 className='about-me'>About me</h2>
            <hr class="w-50 mx-auto pb-5"></hr>
          <div className='row'>
            <div class="col-lg-6">
              <img src={profile} className='img-row-fluid rounded-circle' alt=''/>
            </div>

            <div class="col-lg-6">
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias voluptatum neque enim, aperiam minus! Ea ex, reiciendis sapiente sint debitis repudiandae perferendis possimus esse nesciunt, soluta libero accusantium. Inventore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate sequi quidem illo porro, ducimus fugiat magnam dolorum iusto ut sapiente, voluptatem cum consequuntur autem. Dolorem sit nostrum sint hic!
            </p>
            </div>
            </div>
              
        </div>
    </div>
  )
}

export default Body;