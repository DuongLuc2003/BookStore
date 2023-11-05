import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { Auth } from '@interfaces/auth'
const getUsers = async () => {
    const respone = await axios.get(`${base_Url}user/all-users`);
   
    return respone.data
}

const customerService = {
    getUsers,
};
export default customerService