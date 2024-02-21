import  {authenticationRepository,profileRepository} from '../libs/app/repository/index'
import {
  createUser_Usecases,
  chooseInterest_Usecase,
  changePassword_Usecase,
  verifyOtp_Usecase,
  verifyEmail_Usecases,
  verifyPassword_Usecase,
  loginWithGoogle_Usecase,
  loginWithFacebook_Usecase,
   addProfile_Usecase,
  loginUser_usecases,
  refreshTokenUsecase,
  getAllUsers_usecasse,
  getUsersByName_Usecase,
  getUsersById_Usecase
} from '../libs/usecases'


const useCase:any={
  createUser_Usecases,
  verifyOtp_Usecase,
  verifyPassword_Usecase,
  loginWithGoogle_Usecase,
  loginWithFacebook_Usecase,
  addProfile_Usecase,
  verifyEmail_Usecases,
  changePassword_Usecase,
  loginUser_usecases,
  chooseInterest_Usecase,
  refreshTokenUsecase,
  getAllUsers_usecasse,
  getUsersByName_Usecase,
  getUsersById_Usecase
  
}

const repository:any={
    authenticationRepository,
    profileRepository
}
export default {
    useCase,repository
}