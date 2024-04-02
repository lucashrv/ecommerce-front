import axios from "axios"
import env from '../schemas/envSchema';

const axiosInstance = axios.create({
    baseURL: env.VITE_DATABASE_URL,
    withCredentials: true
})

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

export default axiosInstance
