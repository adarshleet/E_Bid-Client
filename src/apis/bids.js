import Api from "../services/api";
import bidRoutes from "../services/endpoints/bidEndpoints";
import errorHandle from "./errorHandler";


export const createBid = async(item,bidAmount)=>{
    try {
        const res = await Api.post(bidRoutes.createBid,{item,bidAmount})
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}



//get user single bid
export const userBid = async(id)=>{
    try {
        const res = await Api.get(`${bidRoutes.userBid}?id=${id}`)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}



//get all bids of a product
export const allBids = async(id)=>{
    try {
        const res = await Api.get(`${bidRoutes.allBids}?id=${id}`)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}



//get all user baded items
export const userBids = async(id)=>{
    try {
        const res = await Api.get(bidRoutes.userBids)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}