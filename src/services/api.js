import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem('token') || null

const Api = axios.create({baseURL:baseUrl,
    withCredentials:true,
    headers: {
        'token': token
    }
});

export default Api;