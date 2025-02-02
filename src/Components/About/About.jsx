import React from "react"
import './About.css'
import {Link,NavLink} from 'react-router-dom'

 function About() {
    return (
        <div>
            <div id="img">
                <h1>About Us</h1>
                <img src="https://images.pexels.com/photos/2796104/pexels-photo-2796104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

            <div id="about">
                <div id="left">
                    <img src="https://images.pexels.com/photos/6207454/pexels-photo-6207454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div id="right">
                    <h2>Quantum Accounting and Business Solution
                    </h2>
                    <div className="border-black border-2 p-3">
                        <p className="mt-5">At Quantum Accounting and Business Solution, we specialize in delivering top-tier outsourcing solutions for accounting and bookkeeping. Based in India, we proudly extend our expertise to businesses in the USA, Canada, UK, Australia, and beyond. With years of experience in the financial domain, our team ensures accurate, efficient, and reliable services tailored to meet the unique needs of your business.</p>
                            <button>ABOUT MORE</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default About