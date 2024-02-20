import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPostOfUserFunction } from "../../utils/api/methods/PostService/get/getAllPostOfUser";
import { toast } from "sonner";
const PostsComponent = () => {  

  const [posts,setPosts]=useState([])

  const user=  useSelector((state:any)=>state.persisted.user)
  useEffect(()=>{
    if(user == undefined){
      toast.error("no user fund")
    }else{

    }

  },[])
 const navigate=useNavigate()


useEffect(()=>{
  const fetchData = async () => {
    try {
      if (user?.userData == undefined) {
        toast.error("user  not find")
        // return navigate('/login');
      } else {
        const response = await getAllPostOfUserFunction(user.userData.userId);
        console.log(response,'this is respoce form the get all post requst');
        console.log(response.data,'this   form the get all post requst');

        
        if(response.status){
const data=response.data
          setPosts(data)
          
        }

        
            
        
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error
    }
  };

  fetchData(); // Call the async function immediately

},[user])   


useEffect(()=>{
  console.log(posts,'this is posts ');
  console.log(posts.length,'this is posts lenght');

  
},[posts])


  return (
    <>
      <div className="flex flex-wrap flex-row justify-center mt-5 pb-20">
        <div className="grid grid-cols-3 gap-0.5 md:gap-4 p-0.5">

       
<>
{posts.length > 0 && posts.map((item:any) => {
  console.log(item, "JJJJJJJ");
return (
  
    <div className="max-w-64" key={item.id}> {/* Adding a key to each mapped element */}
      <img className=" border border-amber-10"
        src={`http://localhost:3002/img/${item.mediaUrl[0]}`}
        alt=""
      />
    </div>
)

})}

</>


          
          
          
         
         
         
        </div>
      </div>
    </>
  );
};



export default PostsComponent;   
