import React from "react"
import './Contact.css'

 function Contact() {
    return (
        <div>
            <div class="form-part">
                <div class="form">
                    <div class="form-details">
                        <h1>Hotel Contact Form</h1>
                        <div class="name">
                            
                            <div class="input">
                                <input type="text" name="" class="first" placeholder="First Name"/>
                                <input type="text" placeholder="Last" class="Last Name"/>
                            </div>

                        </div>
                        <div class="name">
                            
                            <div class="input">
                                <input type="email" name="" id="" placeholder="Email" />
                                <input type="number" name="" id="" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div class="name">
                            
                            <div class="input">
                                
                                <textarea name="" id="text" placeholder="Massage"></textarea>
                            </div>
                        </div>
                        <div class="name">
                            
                            <div class="input" >
                                <input type="submit" name="" id="btn"  />
                            
                            </div>
                        </div>
                    </div>
                </div>
	        </div>
            <div  class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7221852.767402766!2d72.49649714241713!3d27.892910074239207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39037aaf0bd7c733%3A0x540b12c1cbabba63!2sPost%20Office%2C%20Keylong!5e0!3m2!1sen!2sin!4v1714805665113!5m2!1sen!2sin" width="800" height="600"  
               className="w-[85vw] h-[70vh]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )

 }
 export default Contact    