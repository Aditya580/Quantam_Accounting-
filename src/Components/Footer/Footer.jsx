import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-y mt-8">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="md:flex md:justify-between p-5">
          <div className="mb-6 md:mb-0 flex flex-col items-center">
            <Link to="/" className="items-start">
              <img src="/logo2.jpeg" className="mr-0 h-20 mb-4" alt="Logo" />
            </Link>
            <p className="w-[30vw] flex flex-col justify-start items-start">
              <span className="w-full flex items-center p-1">
                <FaPhoneAlt className="mr-2" /> +918299893026 / +918319172674
              </span>
              <span className="w-full flex items-center p-1">
                <FaEnvelope className="mr-2" /> info@quantumabs.com
              </span>
              <span className="w-full flex items-center p-1">
                <FaMapMarkerAlt className="mr-2" /> PN 94 Shiv Prem Vatika, Mandideep, Bhopal, Madhya Pradesh
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline" target="_blank" rel="noreferrer">Contact</a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black p-5 mt-2">
          <div className="flex items-center justify-between">
            <span className="flex text-sm text-gray-500 text-center">
              © 2025 <p className="hover:underline">Quantum Accounting and Business Solution</p>. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
