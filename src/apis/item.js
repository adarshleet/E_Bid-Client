import Api from "../services/api";
import itemRoutes from "../services/endpoints/itemEndpoints";
import errorHandle from "./errorHandler";


export const addItem = async(productDetails)=>{
    try {
        const res = await Api.post(itemRoutes.addItem,productDetails)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}


export const userItems = async()=>{
    try {
        const res = await Api.get(itemRoutes.userItems)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}


export const itemsToShow = async()=>{
    try {
        const res = await Api.get(itemRoutes.itemsToShow)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}


export const singleItem = async(id)=>{
    try {
        const res = await Api.get(`${itemRoutes.singleItem}?id=${id}`)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}