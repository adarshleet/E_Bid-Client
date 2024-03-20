import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'
import { useParams } from 'react-router-dom';
import { singleItem } from '../../apis/item';
import { allBids, createBid, userBid } from '../../apis/bids';
import { toast } from 'sonner'

const Product = () => {
    const { id } = useParams();
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    const [item, setItem] = useState(null)
    const [bidInput, setBidInput] = useState(false)
    const [bidAmount, setBidAmount] = useState(null)

    const [usersBid, setUsersBid] = useState(null)
    const [itemAllBids, setItemAllBids] = useState(null)


    useEffect(() => {
        const fetchData = async () => {

            //item details
            const res = await singleItem(id)
            console.log('res', res)
            setItem(res.data)

            if (token) {
                //single bid of user
                const singleBid = await userBid(id)
                console.log(singleBid)
                setUsersBid(singleBid.data)
            }

            //take all bids of the product
            const itemBids = await allBids(id)
            console.log(itemBids)
            setItemAllBids(itemBids.data)
        }
        fetchData()
    }, [bidInput])


    const formatDate = (dateString) => {
        // Create a Date object from the dateString
        const date = new Date(dateString);

        // Get the day, month, and year
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Construct the formatted date string
        const formattedDate = `${day} ${month} ${year}`;

        return formattedDate;
    };


    const confirmBid = async () => {
        if(bidAmount <= 0){
            return toast.error('Enter a valid amount for bidding')
        }
        const res = await createBid(id, bidAmount)
        console.log(res)
        if (res) {
            toast.success('Bid Added')
            setBidInput(false)
        }
    }

    const handleBid = ()=>{
        if(token ){
            setBidInput(true)
        }
        else{
            toast.error('Please Login')
        }
    }

    return (
        <>
            <Navbar />
            <div className=" bg-white">
                <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                    {item &&
                        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                                <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                                    <img
                                        src={`${import.meta.env.VITE_BASE_URL}/images/${item.image.filename}`}
                                        alt="Product"
                                        className="w-4/5 rounded object-cover"
                                    />
                                    
                                </div>

                            </div>
                            <div className="lg:col-span-2">
                                <h2 className="text-4xl font-extrabold text-[#333]">
                                    {item.itemName}
                                </h2>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <p className="text-[#333] text-4xl font-bold">₹{item.bidStartPrice}</p>
                                    
                                </div>
                                <div className='py-2 font-bold'>
                                    <h1> Start Date : {formatDate(item.bidStartDate)}</h1>
                                    <h1>End Date : {formatDate(item.bidEndDate)}</h1>
                                </div>


                                {item.type == 'fixed' && item.user._id != userId ? 

                                <div>
                                    <button
                                                type="button"
                                                className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded"
                                            >
                                                Buy Now
                                            </button>
                                </div>
                                
                                :<div className="flex flex-wrap gap-4 mt-10">
                                    {usersBid ?

                                        <>
                                            <div className='flex flex-col'>
                                                <h1 className='text-2xl font-bold'>Bid Added</h1>
                                                <h3 className='text-lg font-bold'>Amount : {usersBid.bidAmount}</h3>
                                            </div>
                                        </>


                                        : (item.status === 'started' && item.user._id != userId && !bidInput &&
                                            <button
                                                onClick={handleBid}
                                                type="button"
                                                className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded"
                                            >
                                                Add a bid
                                            </button>)}
                                   
                                    {bidInput &&
                                        <div className='py-2 flex flex-col gap-2'>
                                            <input type="number" onChange={(e) => setBidAmount(e.target.value)} value={bidAmount} />
                                            <div className='flex gap-2'>
                                                <button className='py-2 px-3 font-bold bg-green-600 rounded-md text-white w-full' onClick={confirmBid}>Confirm</button>
                                                <button className='py-2 px-3 font-bold bg-red-800 rounded-md text-white w-full' onClick={(e) => setBidInput(false)}>Cancel</button>
                                            </div>
                                        </div>}
                                </div>}

                            </div>
                        </div>}
                    {item && item.type == 'auction' && <Table itemAllBids={itemAllBids} />}
                </div>
            </div>
        </>

    )
}

export default Product
