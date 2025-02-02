import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
export default function Home() {
    return (
        <>
        <div className="mx-auto w-full max-w-7xl">
                <div className="flex justify-center items-center h-screen w-full select-none">
                    <h1 className="text-[4vw]  font-black text-center absolute text-white">
                    Welcome to <br/>
                     Your Trusted Partner for Outsourced 
                    <br/>
                    Accounting and Bookkeeping Services
                    <br />
                    </h1>
                     <img src="https://images.pexels.com/photos/7611749/pexels-photo-7611749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  className="w-full h-[80vh] object-cover
"/>
                </div>        
        </div>
        <WhyChooseUs />
        </>
    );
}
