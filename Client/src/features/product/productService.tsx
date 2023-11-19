import axios from "axios";
import { base_Url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getProducts = async (data) => {
  console.log(data)
  const respone = await axios.get(`${base_Url}product?${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}${data?.sort?`sort=${data?.sort}&&`:""}`);
  return respone.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`${base_Url}product/`, product, config);

  return response.data;
};

const getProductById = async (id) => {
  const respone = await axios.get(`${base_Url}product/${id}`);
  return respone.data;
};
const addToWishlist = async (prodId: any) => {
  const respone = await axios.put(`${base_Url}product/wishlist`, { prodId }, config);
  if (respone.data){
    return respone.data;
  }
 
};
const rateProduct = async (data:any) => {
  const respone = await axios.put(`${base_Url}product/rating`, data, config);
  if (respone.data){
    return respone.data;
  }
 
};

const productService = {
  getProducts,
  addToWishlist,
  getProductById,
  rateProduct,
  createProduct
};
export default productService;
