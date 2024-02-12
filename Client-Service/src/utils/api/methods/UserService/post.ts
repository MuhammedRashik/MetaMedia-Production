import axios from "axios";
import { EditProfile_Api } from "../../endpoints/common";
import client from '../../baseUrl/axios.baseUrl'
export const EditProfileFunction = (data: any) => {
    try {
      return client().post(EditProfile_Api, data);
    } catch (error) {
      return error;
    }
  };