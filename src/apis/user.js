import Api from "../services/api";
import userRoutes from "../services/endpoints/userEndpoints";
import errorHandle from "./errorHandler";


export const signup = async(userDetails)=>{
    try {
        const res = await Api.post(userRoutes.signup,userDetails)
        return res
    } catch (error) {
        console.log(error)
        return errorHandle(error)
    }
}