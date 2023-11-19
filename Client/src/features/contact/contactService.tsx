import axios from "axios";
import { base_Url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const postEnQ = async (contactData:any) => {
  const respone = await axios.post(`${base_Url}enquiry`,contactData);
  return respone.data;
};


const contactService = {
 postEnQ
};
export default contactService;
