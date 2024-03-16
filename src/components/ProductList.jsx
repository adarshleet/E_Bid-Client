import React, { useEffect, useState } from 'react'
import { userItems } from '../apis/item'
import { Link } from 'react-router-dom'

const ProductList = ({ title, items }) => {

    if (!items) {
        return (
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h1 className='font-bold text-lg mb-2'>Please wait upto 30 seconds for items to load</h1>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
                    role="status">
                    <span
                        className="text-black !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>
        )
    }


    return (
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items &&
                    items.map((item, index) => (
                        <Link to={`/product/${item._id}`} key={index} className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">

                            <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img
                                    src={`${import.meta.env.VITE_BASE_URL}/images/${item.image.filename}`}
                                    alt="Product 3"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{item.itemName}</h3>
                                {/* <p className="text-gray-500 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p> */}
                                <h4 className="text-lg text-gray-700 font-bold mt-4">₹{item.bidStartPrice}</h4>
                            </div>
                        </Link>
                    ))}

            </div>
        </div>
    )
}

export default ProductList
