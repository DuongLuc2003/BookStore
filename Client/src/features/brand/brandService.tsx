import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getBrands = async () => {
    const respone = await axios.get(`${base_Url}brand`);
   
    return respone.data
}
const createBrand = async (brand) => {
    const response = await axios.post(`${base_Url}brand/`, brand, config);
  
    return response.data;
  };
  const updateBrand = async (brand) => {
    const response = await axios.put(
      `${base_Url}brand/${brand.id}`,
      { title: brand.brandData.title },
      config
    );
  
    return response.data;
  };
  const getBrand = async (id) => {
    const response = await axios.get(`${base_Url}brand/${id}`, config);
  
    return response.data;
  };
  
  const deleteBrand = async (id) => {
    const response = await axios.delete(`${base_Url}brand/${id}`, config);
  
    return response.data;
  };
const brandService = {
    getBrands,
    createBrand,
    updateBrand,
    getBrand,
    deleteBrand
};
export default brandService