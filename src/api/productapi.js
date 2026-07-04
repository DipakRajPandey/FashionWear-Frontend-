import config from "../config/index.js"
import axios from "axios"
import api from "./api.js";
import { formatParams } from "@/helpers/params.js";

export const getProducts=async(searchParams)=>{
   
   const query =formatParams(searchParams)
  

   const response=await axios.get(
      `${config.apiURL}/api/product?limit=100&${query}`,
   );
   console.log("response data from apis ",response.data)
   return response.data;
}








export const getProductById=async(id)=>{


   const response =await axios.get(`${config.apiURL}/api/product/${id}`)
   return response.data
}

export const  addProduct=async(data)=>{
  return await api.post(`/api/product`,data)
   
}
export const deleteProduct=async(id)=>{
   return await api.delete(`/api/product/delete/${id}`)
}

export const updateProduct=async(id,data)=>{
    return await api.put(`/api/product/update/${id}`,data)
   }


   export const getCategories=async()=>{
    const response=  await axios.get(`${config.apiURL}/api/product/category`)
      return response.data
   }

   export const getBrands=async()=>{
      const response= await axios.get(`${config.apiURL}/api/product/brand`)
      return response.data
   }