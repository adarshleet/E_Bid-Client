import React from 'react'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'

const Products = () => {
    return (
        <>
        <Navbar/>
        <div className=" bg-gray-100">
            <ProductList title={'All Items'}/>
        </div>
        </>

    )
}

export default Products
