import axios from "axios";
import { config } from "../../utils/axiosConfig";
import { base_Url } from "../../utils/baseUrl";

const uploadImg = async (data:any) => {
  const response = await axios.post(`${base_Url}upload/`, data, config);
  return response.data;
};
const deleteImg = async (id:any) => {
  const response = await axios.delete(
    `${base_Url}upload/delete-img/${id}`,

    config
  );
  return response.data;
};

const uploadService = {
  uploadImg,
  deleteImg,
};

export default uploadService;