import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
const getProductCategories = async () => {
    const respone = await axios.get(`${base_Url}category`);
   
    return respone.data
}

const pCategoriesService = {
    getProductCategories,
};
export default pCategoriesService