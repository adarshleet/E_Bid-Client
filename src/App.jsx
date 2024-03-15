import { useState } from 'react'

import Product from './pages/singleProduct/Product.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/products/Products.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';


function App() {
    const [count, setCount] = useState(0)

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Router>
    )
}

export default App
