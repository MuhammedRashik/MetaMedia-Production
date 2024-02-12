import { RefreshToken_Api } from "../../endpoints/common";
import client from '../../baseUrl/axios.baseUrl'
import axios from "axios";
export const Refresh = () => {
  try {
    return client().get(RefreshToken_Api);
  } catch (error) {
    return error;
  }
};
