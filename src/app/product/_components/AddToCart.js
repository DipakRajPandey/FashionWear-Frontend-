"use client";
import useCartStore from "@/stores/cartStore";
import React from "react";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
     const { addToCart}=useCartStore.getState()
  const handleClick = () => {
   
    addToCart(product)
    toast.success("Product added to cart successfully");
  };
  return (
    <>
      <button
        className=" px-2 py-2 w-full bg-amber-500 text-center rounded-2xl mt-2 text-sm font-medium transition duration-300 ease"
        onClick={handleClick}
      >
        Add to cart
      </button>
    </>
  );
};
export default AddToCart;
