import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import { signup } from '../../apis/user'
import {useNavigate} from 'react-router-dom'
import {toast} from 'sonner'

const Signup = () => {

    const [user,setUser] = useState({
        name:'',
        email : '',
        password : '',
        confirmPassword : ''
    })

    const navigate = useNavigate()


    

    const signupHandle = async(e)=>{
        e.preventDefault()
        if(user.name.trim().length < 3){
            return toast.error('Enter a valid name')
        }
        else if(!validateEmail(user.email)){
            return toast.error('Enter valid email')
        }
        else if(user.password.trim().length < 8){
            return toast.error('Password length must be greater than 8')
        }
        else if(user.password !== user.confirmPassword){
            return toast.error('Password does not match')
        }


        const res = await signup(user)
        if(res){
            navigate('/login')
            toast.success('Signup Successful. Please Login.')
        }
    }

    function validateEmail(email){
        const regex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
        return regex.test(email);
    }

   




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
                    <form className="w-full p-8 lg:w-1/2" onSubmit={(e)=>signupHandle(e)}>
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            E-Bid
                        </h2>
                        <p className="text-xl text-gray-600 text-center">SIGNUP</p>

                        <div className="mt-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                value={user.name}
                                onChange={(e)=>setUser({...user,name:e.target.value})}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                                type="text"
                            />
                        </div>

                        <div className="mt-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                value={user.email}
                                onChange={(e)=>setUser({...user,email:e.target.value})}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                                type="text"
                            />
                        </div>
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                value={user.password}
                                onChange={(e)=>setUser({...user,password:e.target.value})}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-2 block w-full appearance-none"
                                type="password"
                            />
                        </div>

                        <div className="mt-2">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Confirm Password
                                </label>
                            </div>
                            <input
                                value={user.confirmPassword}
                                onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="password"
                            />
                        </div>
                        <div className="mt-8">
                            <button type='submit' className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                                Signup
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4" />
                            <Link to="/login" className="text-xs text-gray-500 uppercase">
                                or login
                            </Link>
                            <span className="border-b w-1/5 md:w-1/4" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
