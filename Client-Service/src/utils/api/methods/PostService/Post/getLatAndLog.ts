import axios from 'axios'
import {getLatAndLong_Api} from '../../../endpoints/common'
import { BASE_URL } from '../../../baseUrl/axios.baseUrl';
export const getLatAndLogFuntion=async(data:string)=>{
console.log(data,'THIS');
const bakendData={
    id:data
}

    const response = await  axios.create({
        baseURL:BASE_URL,
        withCredentials : true,
    }).post(getLatAndLong_Api,bakendData );

    return response.data


}
