"use client";
import { deleteProduct, getProducts } from "@/api/productapi";
import { PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import useAuthStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCog, FaImage, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore.getState();



   const  fetchProducts=()=>{
   getProducts({ userId: user._id })
      .then((data) => {
        // console.log(data)
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

   };
  useEffect(() => {
 fetchProducts()
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Product
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                Stock
              </th>
              <th scope="col" className="px-4 py-3">
                createdAt
              </th>
              <th scope="col" className="px-4 py-3 text-2xl">
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length == 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No products.
                </td>
              </tr>
            ) : (
              products?.map((product) => {
                return(
                <tr key={product._id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <th
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.imageUrls.length > 0 ? (
                      <Image
                        src={product.imageUrls[0]}
                        alt={product.name}
                        height={64}
                        width={64}
                        className="w-8 h-8 mr-3 object-cover rounded"
                      />
                    ) : (
                      <FaImage className="w-8 h-8 mr-3 rounded text-gray-500" />
                    )}
                    <span className="font-medium">{product.name}</span>
                  </th>
                  <td className="px-4 py-2">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.brand}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.price}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center">
                      <div className={`inline-block w-4 h-4 mr-2 ${product.stock>5?" bg-green-700":"bg-red-700"} rounded-full`} />
                      {product.stock}
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.created}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <div className="flex gap-2">
                    <Link
                      href={`${PRODUCT_MANAGEMENT_ROUTE}/${product._id}/edit`}
                    >
                      <FaPencil className="text-blue-600" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Are you sure?")) {
                          deleteProduct(product._id)
                            .then(() => {
                              toast.success("Product deleted successfully.");

                            fetchProducts();
                            })
                            .catch((error) => {
                              console.log(error);

                              toast.error(error.response.data);
                            });
                        }
                      }}
                    >
                      <FaTrash className="text-red-600" />
                    </button>
                  </div>
                  </td>
                </tr>)
              })
            
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default ProductsTable;
