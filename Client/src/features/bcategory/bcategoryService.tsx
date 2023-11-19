import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getBlogCategories = async () => {
    const respone = await axios.get(`${base_Url}blogcategory`);
   
    return respone.data
}
const createBlogCategory = async (bcat) => {
    const response = await axios.post(`${base_Url}blogcategory/`, bcat, config);
  
    return response.data;
  };
const updateBlogCategory = async (blogCat) => {
    const response = await axios.put(
      `${base_Url}blogcategory/${blogCat.id}`,
      { title: blogCat.blogCatData.title },
      config
    );
  
    return response.data;
  };
  const getBlogCategory = async (id) => {
    const response = await axios.get(`${base_Url}blogcategory/${id}`, config);
  
    return response.data;
  };
  
  const deleteBlogCategory = async (id) => {
    const response = await axios.delete(`${base_Url}blogcategory/${id}`, config);
  
    return response.data;
  };
const blogCateService = {
    getBlogCategories,
    deleteBlogCategory,
    getBlogCategory,
    updateBlogCategory,
    createBlogCategory
};
export default blogCateService