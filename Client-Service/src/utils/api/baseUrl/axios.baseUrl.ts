
import axios from 'axios'
const BASE_URL='http://metamedia.com'

export const USER_URL = '/api/user'; 

export const AUTH_URL = '/api/auth'; 

export const POST_URL = '/api/post'; 

export const STORY_URL = '/api/story'; 


export default ()=>{
    return axios.create({
        baseURL:BASE_URL,
        withCredentials:true
    })
}



export const axiosPrivet = axios.create({
    baseURL:BASE_URL,
    headers: {'Content-Type' : 'application/json'},
    withCredentials : true,
})

