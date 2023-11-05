import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
const getBlogs = async () => {
    const respone = await axios.get(`${base_Url}blog`);
   
    return respone.data
}

const blogService = {
    getBlogs,
};
export default blogService