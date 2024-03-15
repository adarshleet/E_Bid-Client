import React from 'react'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'

const Product = () => {
    return (
        <>
        <Navbar/>
        <div className=" bg-white">
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img
                                src="https://readymadeui.com/images/laptop5.webp"
                                alt="Product"
                                className="w-4/5 rounded object-cover"
                            />
                            {/* <button type="button" className="absolute top-4 right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    fill="#ccc"
                                    className="mr-1 hover:fill-[#333]"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button> */}
                        </div>
                        
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[#333]">
                            Acer Aspire Pro 12 | Laptop
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <p className="text-[#333] text-4xl font-bold">$1200</p>
                            {/* <p className="text-gray-400 text-xl">
                                <strike>$1500</strike>{" "}
                                <span className="text-sm ml-1">Tax included</span>
                            </p> */}
                        </div>
                    
                      
                        <div className="flex flex-wrap gap-4 mt-10">
                            <button
                                type="button"
                                className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded"
                            >
                                Buy now
                            </button>
                            <button
                                type="button"
                                className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <Table/>
            </div>
        </div>
        </>

    )
}

export default Product
