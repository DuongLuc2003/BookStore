import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getProductCategories = async () => {
    const respone = await axios.get(`${base_Url}category`);
   
    return respone.data
}
const createCategory = async (category) => {
    const response = await axios.post(`${base_Url}category/`, category, config);
  
    return response.data;
  };
  
  const getProductCategory = async (id) => {
    const response = await axios.get(`${base_Url}category/${id}`, config);
  
    return response.data;
  };
  
  const deleteProductCategory = async (id) => {
    const response = await axios.delete(`${base_Url}category/${id}`, config);
  
    return response.data;
  };
  const updateProductCategory = async (category) => {
    console.log(category);
    const response = await axios.put(
      `${base_Url}category/${category.id}`,
      { title: category.pCatData.title },
      config
    );
  
    return response.data;
  };

const pCategoriesService = {
    getProductCategories,
    createCategory,
    getProductCategory,
    deleteProductCategory,
    updateProductCategory,
};
export default pCategoriesService