export const getUsersByName_Usecase = (dependencies: any) => {
    const { repository: { authenticationRepository }} = dependencies;
  
    const executeFunction = async (name:string) => {    
    const responce = await authenticationRepository.getUsersByName(name)
       
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