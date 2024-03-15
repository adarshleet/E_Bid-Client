import React from 'react'
import { Link } from 'react-router-dom'

const BidList = ({title,items}) => {
  return (
    <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items && 
                items.map((item, index) => (
                    <Link to={`/product/${item.item._id}`} key={index} className="bg-white rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md">
                        
                        <div className="w-11/12 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <img
                                src={`http://localhost:3000/images/${item.item.image.filename}`}
                                alt="Product 3"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">{item.item.itemName}</h3>
                            {/* <p className="text-gray-500 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p> */}
                            <h4 className="text-lg text-gray-700 font-bold mt-4">₹{item.item.bidStartPrice}</h4>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
  )
}

export default BidList
