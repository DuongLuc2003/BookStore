import axios from "axios";
import { base_Url } from '../../utils/baseUrl'
import { config } from '../../utils/axiosConfig';
const getEnquiries = async () => {
  const response = await axios.get(`${base_Url}enquiry/`);

  return response.data;
};
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_Url}enquiry/${id}`, config);
  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${base_Url}enquiry/${id}`);
  return response.data;
};
const udpateEnquiry = async (enq) => {
  const response = await axios.put(
    `${base_Url}enquiry/${enq.id}`,
    { status: enq.enqData },
    config
  );
  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  udpateEnquiry,
};

export default enquiryService;