

import create from '../../../baseUrl/axios.baseUrl'
import { getUserPosts_Api } from '../../../endpoints/common';
export const getAllPostOfUserFunction=async(userId:any)=>{

try {

    

   const responce = await create().get(`${getUserPosts_Api}?id=${userId}`)

   return responce.data

    
} catch (error) {
    
}
    


}