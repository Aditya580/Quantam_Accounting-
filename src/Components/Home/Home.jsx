import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

export default function Home() {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex justify-center items-center h-screen w-full select-none relative">
                    {/* Animated Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-helvetica text-[4vw] font-black text-center absolute text-white"
                    >
                        Welcome to <br />
                        Your Trusted Partner for Outsourced
                        <br />
                        Accounting and Bookkeeping Services
                        <br />
                    </motion.h1>

                    {/* Background Image */}
                    <img
                        src="/accounting.jpeg"
                        alt=""
                        className="w-full h-[80vh] object-cover"
                    />
                </div>
            </div>
            <WhyChooseUs />
            <TeamSection />
            <TestimonialSection />
        </>
    );
}
