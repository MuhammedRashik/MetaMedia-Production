


export const getAllUsers_usecasse = (dependencies: any) => {
  const { repository: { authenticationRepository }} = dependencies;

  const executeFunction = async () => {    
  
    const responce= await authenticationRepository.getAllUsers()
    if(responce.status){
        return {status:true,data:responce.data}
    }else{

        return {status:false}
    }
    
  
  }
  return {
    executeFunction,
  }
};
