import axios from "axios"
import config from "../config/index.js"
export const  login=async(data)=>{
    return await axios.post(`${config.apiURL}/api/auth/login`,data)
}
export const signup=async(data)=>{
    return await axios.post(`${config.apiURL}/api/auth/register`,data)
}
export const forgotPassword=async(data)=>{
    console.log(data)
    return await axios.post(`${config.apiURL}/api/auth/forgot-password`,data)
}
export const resetPassword =async(data)=>{
    return await axios.post(`${config.apiURL}/api/auth/reset-password`,data)
}