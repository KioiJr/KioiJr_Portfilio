import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  return (
    <div id='contact'>
      	<div className="post-heading text-center">
				{/* <h1 class="section-header">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch</span></h1> */}
				<h3>Leave me a message!</h3>
				<hr className="w-75 mx-auto pb-5"/>
			</div>
			<div class="contact-section">
			<div class="container">
				<form>
					<div class="col-12 form-line">
			  			<div class="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" class="form-control" id="" placeholder=" Enter Name"/>
				  		</div>
				  		<div class="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id"/>
					  	</div>	
					  	<div class="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."/>
			  			</div>
			  		</div>
			  		<div class="col-12">
			  			<div class="form-group">
			  				<label for ="description"> Message</label>
			  			 	<textarea  class="form-control" id="description" placeholder="Enter Your Message"></textarea>
			  			</div>
			  			<div>

			  				{/* <button type="button" class="btn btn-default submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
			  			</div> */}
              <div className="nav-item">
                  <a className="submit" href="/"> <FontAwesomeIcon icon={faPaperPlane}/> Send</a>
                </div>
			  			</div>
					</div>
				</form>
			</div>
    </div>
    </div>
  )
}

export default Contacts