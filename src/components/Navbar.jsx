import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* component */}
            <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto fixed top-0 left-0 right-0 z-10">
                <div className="h-16 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    {/* Logo */}
                    <Link to='/' className="text-gray-900 md:order-1 font-bold text-2xl">
                        {/* Heroicon - Chip Outline */}
                        <h1>E-BID</h1>
                    </Link>
                  
                    <div className="order-2 md:order-3">
                        <Link to='/login' className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            {/* Heroicons - Login Solid */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
