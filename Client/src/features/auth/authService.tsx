import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { Auth } from '@interfaces/auth'
import { config } from '../../utils/axiosConfig';
const login = async (userData:any) => {
    const respone = await axios.post(`${base_Url}user/login`,userData);
    if(respone.data){
        localStorage.setItem("user", JSON.stringify(respone.data))
        return respone.data
    }
    
}
const register = async (userData:any) => {
    const respone = await axios.post(`${base_Url}user/register`,userData);
    if(respone.data){
        if(respone.data){
        localStorage.setItem("user", JSON.stringify(respone.data))
        }
        
    }
    return respone.data
}
const getUserWislist = async () => {
    const respone = await axios.get(`${base_Url}user/wishlist`,config);
    if (respone.data) {
        return respone.data
    }
}
const addtoCart = async (cartData:any) => {
    const respone = await axios.post(`${base_Url}user/cart`,cartData,config);
    if (respone.data) {
        return respone.data
    }
}
const getCart = async () => {
    const respone = await axios.get(`${base_Url}user/cart`,config);
    if (respone.data) {
        return respone.data
    }
}
const removeProCart = async (cartItemId) => {
    const respone = await axios.delete(`${base_Url}user/delete-product-cart/${cartItemId}`,config);
    if (respone.data) {
        return respone.data
    }
}
const updateProCart = async (cartDetail) => {
    const respone = await axios.put(`${base_Url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,config);
    if (respone.data) {
        return respone.data
    }
}
const getUserOrders = async () => {
    const respone = await axios.get(`${base_Url}user/getmyorders`,config)
    if(respone.data){
       return respone.data
    }
}
const updateUser = async (data) => {
    const respone = await axios.put(`${base_Url}user/edit-user`,data,config)
    if(respone.data){
       return respone.data
    }
}
const forgotPassSToken = async (data) => {
    const respone = await axios.post(`${base_Url}user/forgot-password`,data)
    if(respone.data){
       return respone.data
    }
}
const resetPassSToken = async (data) => {
    const respone = await axios.put(`${base_Url}user/reset-password/${data.token}`, {password:data?.password})
    if(respone.data){
       return respone.data
    }
}
const getOrders = async () => {
    const response = await axios.get(`${base_Url}user/getallorders`, config);
    return response.data;
  };
  const getOrder = async (id) => {
    const response = await axios.post(
      `${base_Url}user/getorderbyuser/${id}`,
      "",
      config
    );
  
    return response.data;
  };
  
const authService = {
    login,
    register,
    getUserWislist,
    addtoCart,
    getCart,
    removeProCart,
    updateProCart,
    getUserOrders,
    updateUser,
    forgotPassSToken,
    resetPassSToken,
    getOrder,
    getOrders
};
export default authService