import React, { useState } from 'react'
import { addItem } from '../apis/item'
import {toast} from 'sonner'
const AddProductForm = ({ setShowModal }) => {


    const [product,setProduct] = useState({
        itemName:'',
        bidStartPrice:null,
        bidStartDate:null,
        bidEndDate:null,
        image:null,
        type:null
    })


    const addProductHandle = async(e)=>{
        e.preventDefault()


        if(!product.type){
            return toast.error('Please Select sale type')
        }

        else if(product.itemName.trim().length < 3){
            return toast.error('Enter valid product name')
        }
        else if(!product.bidStartPrice || product.bidStartPrice == 0){
            return toast.error('Enter valid product price')
        }
        else if(!product.bidStartDate || new Date(product.bidStartDate) < new Date()){
            return toast.error('Please enter an upcoming date')
        }
        else if(!product.bidEndDate || new Date(product.bidStartDate) >= new Date(product.bidEndDate) ){
            return toast.error('Please enter an upcoming date for ending date')
        }
        else if(!product.image){
            return toast.error('Please select an image')
        }

        const form = new FormData()
        form.append('itemName',product.itemName)
        form.append('bidStartPrice',product.bidStartPrice)
        form.append('bidStartDate',product.bidStartDate)
        form.append('bidEndDate',product.bidEndDate)
        form.append('image',product.image)
        form.append('type',product.type)

        const res = await addItem(form)
        console.log(res)
        if(res){
            setShowModal(false)
            toast.success('New product added.')
        }
    }


    return (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <svg onClick={() => setShowModal(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
                    viewBox="0 0 320.591 320.591"
                >
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                    />
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                    />
                </svg>
                <div className="my-6 text-center">
                    <h4 className="text-3xl text-[#333] font-extrabold">Add New Product</h4>

                </div>
                <form className="space-y-4" onSubmit={(e)=>addProductHandle(e)}>
                    <div>
                    <h1>Sale Type</h1>
                    <div className='relative flex items-center gap-x-4'>
                        <div>
                            <label className='px-2' htmlFor="">Fixed Sale</label>
                            <input checked={product.type === 'fixed'} value='fixed' onChange={(e)=>setProduct({...product,type:e.target.value})} type="radio" name='type'/>
                        </div>
                        <div>
                            <label className='px-2' htmlFor="">Auction Sale</label>
                            <input type="radio" value='auction' checked={product.type === 'auction'} onChange={(e)=>setProduct({...product,type:e.target.value})} name='type'/>
                        </div>
                    </div>
                    </div>
                    <div className="relative flex items-center">
                        <input
                            value={product.itemName}
                            onChange={(e)=>setProduct({...product,itemName:e.target.value})}
                            type="text"
                            name='itemName'
                            placeholder="Enter Product Name"
                            className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                        />

                    </div>
                    <div className="relative flex items-center">
                        <input
                            value={product.bidStartPrice}
                            onChange={(e)=>setProduct({...product,bidStartPrice:e.target.value})}
                            type="number"
                            name='bidStartPrice'
                            placeholder="Enter Minimum Bid Amount"
                            className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                        />

                    </div>
                    <div className='flex gap-2'>
                        <div className="relative items-center">
                            <label htmlFor="">Enter starting date</label>
                            <input
                                value={product.bidStartDate}
                                onChange={(e)=>setProduct({...product,bidStartDate:e.target.value})}
                                name='bidStartDate'
                                type="date"
                                placeholder="Enter Minimum Bid Amount"
                                className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                            />

                        </div>
                        <div className="relative items-center">
                            <label htmlFor="">Enter closing date</label>
                            <input
                                value={product.bidEndDate}
                                onChange={(e)=>setProduct({...product,bidEndDate:e.target.value})}
                                name='bidEndDate'
                                type="date"
                                placeholder="Enter Minimum Bid Amount"
                                className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                            />

                        </div>
                    </div>
                    <div className='flex items-center'>
                        <input type="file" name="image" id="" onChange={(e)=>setProduct({...product,image:e.target.files[0]})}/>
                        {product.image &&
                            <img width={200} src={URL.createObjectURL(product.image)} alt="" />
                        }
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2.5 !mt-8 w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full"
                    >
                        Add Product
                    </button>
                </form>

            </div>
        </div>

    )
}

export default AddProductForm
