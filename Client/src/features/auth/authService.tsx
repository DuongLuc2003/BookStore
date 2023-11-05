import axios from 'axios'
import { base_Url } from '../../utils/baseUrl'
import { Auth } from '@interfaces/auth'
const login = async (userData:any) => {
    const respone = await axios.post(`${base_Url}user/login`,userData);
    if(respone.data){
        localStorage.setItem("user", JSON.stringify(respone.data))
    }
    return respone.data
}

const authService = {
    login,
};
export default authService