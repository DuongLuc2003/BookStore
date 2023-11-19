import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getAuthors = async () => {
    const respone = await axios.get(`${base_Url}author`);
   
    return respone.data
}
const createAuthor = async (author) => {
    const response = await axios.post(`${base_Url}author/`, author, config);
  
    return response.data;
  };
  
  const deleteAuthor = async (id) => {
    const response = await axios.delete(`${base_Url}author/${id}`, config);
  
    return response.data;
  };
  const updateAuthor = async (author) => {
    console.log(author);
    const response = await axios.put(
      `${base_Url}author/${author.id}`,
      config
    );
  
    return response.data;
  };

const authorService = {
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor,
};
export default authorService