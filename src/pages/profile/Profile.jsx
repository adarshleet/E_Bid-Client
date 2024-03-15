import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'
import AddProductForm from '../../components/AddProductForm'
import { userItems } from '../../apis/item'
import { userBids } from '../../apis/bids'
import BidList from '../../components/BidList'

const Profile = () => {

    const [showingItems, setShowingItems] = useState(true)
    const [showModal,setShowModal] = useState(false)

    const [items,setItems] = useState(null)
    const [allUserBids,setAllUserBids] = useState(null)


    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await userItems()
            console.log('tehis',res.data)
            setItems(res.data)

            const response  = await userBids()
            console.log('this',response)
            setAllUserBids(response.data)
        }
        fetchData()
    },[showModal])


    const LogoutHandle = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        navigate('/login')
    }

    return (
        <>
            <Navbar />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        />
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0px)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x={0}
                            y={0}
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 sm:mt-0">
                                            <button onClick={() => setShowingItems(true)}
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Your Products
                                            </button>
                                        </div>
                                        <div className="py-6  sm:mt-0">
                                            <button onClick={() => setShowingItems(false)}
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Your Bids
                                            </button>
                                        </div>
                                        <div className="py-6  sm:mt-0">
                                            <button onClick={LogoutHandle}
                                                className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Logout
                                            </button>
                                        </div>

                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        
                                    </div>
                                </div>

                                {showingItems ?
                                    <>
                                        <div>
                                            <button 
                                            onClick={()=>setShowModal(true)}
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Add New Item
                                            </button>
                                        </div>
                                        <ProductList title={'Your Products'} items={items}/>
                                    </>

                                    :
                                    <BidList title={'Your Bids'} items={allUserBids}/>
                                }
                                
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            {showModal && <AddProductForm setShowModal={setShowModal}/>}
        </>

    )
}

export default Profile
