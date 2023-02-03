import React from 'react'
import "./Contect.css";

const Contect= () =>  {
  return (
    <div className='contect-container' id='contect'>
        <div className='Contect-info'>
            <div class="cont-head">
                <h2>Contact Us</h2>
            </div>
            <div class="info-row">
                <div class="col-logo">
                    <div class="contect-Address">
                        <div class="icon-contect">
                        <i class="bi bi-geo-alt"></i>
						</div>
                        <div class="cont">
                            <h3>Address</h3>
                            <p>A108 Adam Street, NY 535022, USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-logo broder">
                    <div class="phone-number">
                    <div class="icon-contect">
						<i class="bi bi-phone"></i>
					</div>
                    <div class="cont">
                        <h3>Phone Number</h3>
                        <a href="tel:+155895548855">+1 5589 55488 55</a>
                    </div>
                    </div>
                </div>
                <div class="col-logo">
                    <div class="email-ADD">
                    <div class="icon-contect">
						<i class="bi bi-envelope"></i>
					</div>
                    <div class="cont">
                        <h3>Email</h3>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="float">
				<div class="label">
					<div class="input1">
                        <div class="inCol">
                            <input type="text" name="iname" id="name" placeholder="Your Name"></input>
                        </div>
                            <div class="inCol">
                             <input type="text"  id="lname" name="fname" placeholder="Your Email"></input>
                            </div>
					</div>
					<div class="input2">
						<input type="text" id="subject" name="subject" placeholder="subject"></input>
							</div>
					<div class="input2">
						<textarea id ="address" placeholder="Massage" ></textarea>
						</div>
					</div>
					<div class="text-center">
						<button type="submit">Send Message</button>
					</div>
				</div>
    </div>
  )
}

export default Contect