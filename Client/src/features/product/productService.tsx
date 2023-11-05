import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { Auth } from '@interfaces/auth'
const getProducts = async () => {
    const respone = await axios.get(`${base_Url}product`);
   
    return respone.data
}

const productService = {
    getProducts,
};
export default productService