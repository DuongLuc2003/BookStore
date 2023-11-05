import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
const getBrands = async () => {
    const respone = await axios.get(`${base_Url}brand`);
   
    return respone.data
}

const brandService = {
    getBrands,
};
export default brandService