import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL;
const Api = axios.create({baseURL:baseUrl,withCredentials:true});

export default Api;