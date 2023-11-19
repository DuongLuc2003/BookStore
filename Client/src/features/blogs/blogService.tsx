import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getBlogs = async () => {
    const respone = await axios.get(`${base_Url}blog`);
    return respone.data
}
const getBlog = async (id:any) => {
    const respone = await axios.get(`${base_Url}blog/${id}`);
    return respone.data
}
const createBlog = async (blog) => {
    const response = await axios.post(`${base_Url}blog/`, blog, config);
  
    return response.data;
  };
  const updateBlog = async (blog) => {
    const response = await axios.put(
      `${base_Url}blog/${blog.id}`,
      {
        title: blog.blogData.title,
        description: blog.blogData.description,
        category: blog.blogData.category,
        images: blog.blogData.images,
      },
      config
    );
  
    return response.data;
  };
  const deleteBlog = async (id) => {
    const response = await axios.delete(`${base_Url}blog/${id}`, config);
  
    return response.data;
  };
const blogService = {
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog,
    createBlog
};
export default blogService