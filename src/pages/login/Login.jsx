import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {



    return (
        <>
            <Navbar />
            <div className="py-8">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl ">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://www.shutterstock.com/image-vector/auction-isometric-conceptual-composition-desktop-600nw-731507788.jpg")'
                        }}
                    ></div>
                    <div className="w-full px-8 py-28 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            E-Bid
                        </h2>
                        <p className="text-xl text-gray-600 text-center">LOGIN</p>

                       

                        <div className="mt-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                                type="email"
                            />
                        </div>
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                                type="password"
                            />
                        </div>

                        
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                                Login
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4" />
                            <Link to="/signup" className="text-xs text-gray-500 uppercase">
                                or Signup
                            </Link>
                            <span className="border-b w-1/5 md:w-1/4" />
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Login