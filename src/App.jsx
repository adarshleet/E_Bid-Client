import { useState } from 'react'

import Product from './pages/singleProduct/Product.jsx'

import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Products from './pages/products/Products.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Profile from './pages/profile/Profile.jsx';


function App() {
    const [count, setCount] = useState(0)

    const user = localStorage.getItem('token')

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/" />}/>
                <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/' />}/>

                <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
                <Route path='/product/:id' element={<Product/>}/>

            </Routes>
        </Router>
    )
}

export default App
