import { GetAllUsers_Api, RefreshToken_Api } from "../../endpoints/common";
import client from '../../baseUrl/axios.baseUrl'
import axios from "axios";
export const Refresh = async() => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).get(RefreshToken_Api);
  } catch (error) {
    return error;
  }
};
