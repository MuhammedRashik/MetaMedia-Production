import axios from 'axios'
import {SearchLocation_Api} from '../../../endpoints/common'
import { BASE_URL} from '../../../baseUrl/axios.baseUrl'
export const searchLocationFuntion=async(data:string)=>{
console.log(data,'THIS');
const bakendData={
    data:data
}

    const response = await  axios.create({
        baseURL:'http://localhost:3002',
        withCredentials : true,
    }).post(SearchLocation_Api,bakendData );

    return response.data


}

