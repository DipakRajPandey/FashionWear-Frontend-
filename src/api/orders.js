
import api from "./api"

export const createOrders=async(data)=>{
    console.log("data",data)
    return  await api.post(`/api/order/createOrder`,data)

}
export const getAllOrders = async () => {
  return await api.get(`/api/order`);
};

export const getOrdersById = async (id) => {
  return await api.get(`/api/orders/${id}`);
};

export const getOrdersByUser = async () => {
  return await api.get(`/api/order/getOrderByUser`);
};

export const cancelOrder = async (id) => {
  return await api.put(`/api/order/${id}/cancelled`);
};

export const payViaKhalti = async (id) => {
  return await api.put(`/api/order/${id}/payment/khalti`);
};

export const payViaCash = async (id) => {
  return await api.put(`/api/order/${id}/payment/cash`);
};
export const PayViaStripe = async (id) => {
  return await api.put(`/api/order/${id}/payment/stripe`);
};

export const confirmOrder = async (id, status) => {
  return await api.put(`/api/order/${id}/confirm`, { status: status });
};
export const updateOrderStatus = async (id, status) => {
  return await api.put(`/api/order/${id}/status`, { status: status });
};
export const getOrdersByMerchant=async()=>{
  return await api.get("/api/order/merchant")

}