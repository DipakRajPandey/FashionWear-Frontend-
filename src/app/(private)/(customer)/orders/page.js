"use client";
import React, { useEffect, useState } from "react";
import OrderTable from "./_components/OrderTable";
import { cancelOrder, getOrdersByUser } from "@/api/orders";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import { format } from "date-fns";
import { ORDER_PENDING } from "@/constants/orderStatus";
import { toast } from "react-toastify";

import PayViaKhalti from "./_components/PayViaKhalti";
import PayViaCash from "./_components/PayViaCash";
import PayViaStripe from "./_components/PayViaStripe";
import OrderStatus from "@/components/order/OrderStatus";
const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

     const orderStatus = searchParams.get("status");

  //   const router = useRouter();

  useEffect(() => {
    getOrdersByUser()
      .then((res) => setOrders(res.data))
      .catch((error) => {
        console.log(error);

        throw error;
      })
      .finally(() => setLoading(false));
  });

  const handleCancelOrder=(orderId)=>{
    if (confirm("Are you sure?")) {
      cancelOrder(orderId)
        .then(() => {
          toast.info("Order cancelled!");
        })
        .catch((error) => console.log(error));
    }
  }

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <label
        htmlFor="status"
        className=" mb-2.5 text-sm font-medium text-heading mr-2"
      >
        Filter by status:
      </label>
      <select
        id="countries"
        className="mb-10 w-max px-3 py-2.5 border border-gray-200 text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={(e) => handleStatusChange(e.target.value)}
        defaultValue={orderStatus}
      >
        <option value="" selected>
          All
        </option>
        <option value="PENDING">Pending</option>
        <option value="CONFIRMED">Confirmed</option>
        <option value="SHIPPED">Shipped</option>
        <option value="DELIVERED">Delivered</option>
        <option value="CANCELLED">Cancelled</option>
      </select>
      {orders.map((order, index) => (
        <div key={index} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_auto_auto_auto_1fr] bg-white-100 dark:text-white dark:bg-gray-700 px-6 py-4 rounded-xl gap-5 text-sm lg:justify-items-end items-center">
           
           <div>
              <h3 className="text-gray-500">Status</h3>
           
              <OrderStatus status={order.status} />
            </div>
            <div>
              <h3 className="text-gray-500">Date Placed</h3>
              <p className=""> {format(order.createdAt, "dd MMM,yyyy")}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Order Number</h3>
              <p className=""> {order.orderNumber}</p>
            </div>
            <div>
              <h3 className="text-gray-500">Total Amount</h3>
              <p className=""> Rs. {order.totalPrice}</p>
            </div>

            {order.status == ORDER_PENDING && (
              <div className="flex items-center gap-5">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md shadow"
                  onClick={() => handleCancelOrder(order._id)}
                >
                  Cancel
                </button>
                <PayViaKhalti orderId={order._id} />
                <PayViaCash orderId={order._id} />
                <PayViaStripe orderId={order._id}/>

              </div>
            )}
          </div>

          <OrderTable key={index} order={order} />
        </div>
      ))}
    </>
  );
};
export default OrderPage;
