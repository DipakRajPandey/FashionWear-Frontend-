import React from "react";
import Card from "./_components/Card";
import { getBrands, getCategories,  getProducts } from "@/api/productapi";

import Filters from "./_components/Filters";
export const metadata = {
  title: "Products",
  description: "This is  product page ",
};
const ProductPage = async ({searchParams}) => {
  const resolvedSearchParams = await searchParams;
 const products = await getProducts(resolvedSearchParams );
 
  const brands = await getBrands();
  const categories = await getCategories();
  return (
   <>
      <h2 className="mb-8 mt-3 text-2xl text-black font-bold">Featured products</h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]">
      <Filters  categories={categories} brands={brands}/>
        <div className="self-start grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products?.map((product, index) => (
            <Card product={product} key={product._id || index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
