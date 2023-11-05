import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
const getBlogCategories = async () => {
    const respone = await axios.get(`${base_Url}blogcategory`);
   
    return respone.data
}

const blogCateService = {
    getBlogCategories,
};
export default blogCateService