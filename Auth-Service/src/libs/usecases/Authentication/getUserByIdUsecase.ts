export const getUsersById_Usecase = (dependencies: any) => {
    const { repository: { authenticationRepository }} = dependencies;
  
    const executeFunction = async (id:any) => {    
    const responce = await authenticationRepository.getUserById(id)
       
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