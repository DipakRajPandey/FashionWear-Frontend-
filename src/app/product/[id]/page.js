
import { getProductById } from '@/api/productapi';
import axios from 'axios'
import Image from 'next/image';
import React from 'react'


export const generateMetadata=async({params})=>{
  const {id}=await params;
 const product=await getProductById(id);
 return{
  title:product.name,
  description:`${product.name} ${product.brand} ${product.category}`
 }
  
} 
 const ProductDetailPage=async({params})=> {
  const {id}=await params;
    const product=await getProductById(id);
  
  return (
   <>
   
    <div>
      <Image
        src={product.imageUrls[0]}
        alt={product.name}
        height={400}
        width={600}
        className="w-auto h-64"
      />
      <h1 className="text-3xl">{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>Rs. {product.price}</p>
      <p>{product.description}</p>
    </div>

   </>
  )
}
export default ProductDetailPage