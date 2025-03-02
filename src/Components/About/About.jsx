import React from "react"
import './About.css'
import {Link,NavLink} from 'react-router-dom'

 function About() {
    return (
        <div>
            <div  className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5 mt-4">
                <h1 className=" font-helvetica text-3xl">About Us</h1>
                <h3 className="font-helvetica text-gray-400 mt-2"> Let's Build Trust Together </h3>

                <img src="/Aboutus1.jpg" className='w-full h-full mb-4'alt="" />
            </div>

            <div id="about">
            <div id="left" className="flex justify-center">
    <img 
        src="/about.png" 
        className="w-full max-w-[400px] h-auto object-cover rounded-lg mt-12" 
        alt="About" 
    />
</div>

                <div id="right">
                    <h2 className="text-2xl mt-16">Quantum Accounting and Business Solution
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