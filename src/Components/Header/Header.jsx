import React from "react"
import {Link,NavLink} from 'react-router-dom'
// import Connect from "./Components/Connect/Connect";  // Import the component


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 h-20 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo2.jpeg"
                            className="mr-3 justify-items-end h-full max-h-16"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 ">
                        
                    <Link
                           to="/connect"
                    className="font-helvetica text-white bg-[#EEA123] hover:bg-black focus:ring-4 focus:ring-orange-300` rounded-lg text-sm px-4 lg:px-5 py-4 lg:py-2.5 mr-2 focus:outline-none font-semibold"
>
                                         Connect
                                 </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        
                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `  font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#EEA123]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9c8046] lg:p-0`
                                }
                                >
                                Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#EEA123]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9c8046] lg:p-0`
                                }
                                >
                                About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#EEA123]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9c8046] lg:p-0`
                                }
                                >
                                Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `font-helvetica font-semibold block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#EEA123]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9c8046] lg:p-0`
                                }
                                >
                                Contact
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

