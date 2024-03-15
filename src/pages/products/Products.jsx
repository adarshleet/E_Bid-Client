import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/ProductList'
import { itemsToShow } from '../../apis/item'

const Products = () => {

    const [items,setItems] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const res = await itemsToShow()
            console.log(res)
            setItems(res.data)
        }
        fetchData()
    },[])

    return (
        <>
        <Navbar/>
        <div className=" bg-gray-100">
            <ProductList title={'All Items'} items={items}/>
        </div>
        </>

    )
}

export default Products
