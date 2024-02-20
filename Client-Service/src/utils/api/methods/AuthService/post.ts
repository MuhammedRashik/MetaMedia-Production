import axios from "axios";
import client from '../../baseUrl/axios.baseUrl'
import { UserData } from "../../../interface/userInterface";

import {Login_Api,SignUp_Api,VerifyOtp_Api,LoginWithGoogle_Api,AddProfile_Api,ForgotPassword_Api,ChangePassword_Api,LoginWithFacebook_Api, ChooseInterest_Api, Logout_APi,RefreshToken_Api, getUsersByName_Api} from "../../endpoints/common";

export const LoginFuntion = async (data: any) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(Login_Api, data);
  } catch (error) {
    return error;
  }
};
export const LogoutFunction = async ()=>{
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).get(Logout_APi);
  } catch (error) {
    return error;
  }
}
export const SignUpFunction = async (data: any) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(SignUp_Api, data);
  } catch (error) {
    return error;
  }
};

export const verifyOtpFunction = async (data: any) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(VerifyOtp_Api, data);
  } catch (error) {
    return error;
  }
};

export const LoginWithGoogle = async (data: UserData) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(LoginWithGoogle_Api, data);
  } catch (error) {
    console.log(error,"err");
  }
};

export const LoginWithFacebook = async (data: UserData) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(LoginWithFacebook_Api, data);
  } catch (error) {
    console.log(error,"err");
  }
};

export const AddProfileFunction = async (data: any) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(AddProfile_Api, data);
  } catch (error) {
    console.log(error,"err");
    
  }
};
export const ForgotPasswordFunction = async (data: any) => {
  try {
    return await  axios.create({
      baseURL:'http://localhost:3001',
      withCredentials : true,
  }).post(ForgotPassword_Api, data);
  } catch (error) {
    console.log(error,"err");
  }
};
export const ChangePasswordFunction = async (data: any) => {
  try {
    return client().post(ChangePassword_Api, data);
  } catch (error) {
    console.log(error,"err");
  }
};

export const ChooseInterestFunction=(data:any)=>{
  try {
    console.log(data,"dtaaa");
    return client().post(ChooseInterest_Api, data)
  } catch (error) {
    return error
  }
}

export const getUsersByNameFunction=async(data:string)=>{
 try {
const body={
  name:data
}
 const response= await  axios.create({
  baseURL:'http://localhost:3001',
  withCredentials : true,
}).post(getUsersByName_Api, body);

return response.data

 } catch (error) {
  
 }
}

