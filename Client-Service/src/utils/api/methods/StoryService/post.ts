import axios from "axios";
import { AddHighlight_Api } from "../../endpoints/common";
import client from '../../baseUrl/axios.baseUrl'
export const addHighlightFunction = (data: any) => {
  try {
    return client().post(AddHighlight_Api, data);
  } catch (error) {
    return error;
  }
};