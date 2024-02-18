import React, { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPostOfUserFunction } from "../../utils/api/methods/PostService/get/getAllPostOfUser";
import { toast } from "sonner";
const PostsComponent = () => {  

  const [posts,setPosts]:any=useState([])

  const user=  useSelector((state:any)=>state.persisted.user)
  useEffect(()=>{
    if(user == undefined){
      toast.error("no user fund")
    }else{
toast.success('user fund')
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

          setPosts(response.data)
          toast.success('post are here')
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
  console.log(posts,'HHHHHH');
  
},[posts])


  return (
    <>
      <div className="flex flex-wrap flex-row justify-center mt-5 pb-20">
        <div className="grid grid-cols-3 gap-0.5 md:gap-4 p-0.5">

        <div className="max-w-64">
  <img className=" border border-amber-10"
    src='https://i.pinimg.com/736x/44/ce/dc/44cedc9b6604a482384861e0093f96a0.jpg'
    alt=""
  />
</div>
{posts.length > 0 && (
<>
{posts.map((item:any)=>{
  {console.log(item,"JJJJJJJ")
  }
  <div className="max-w-64">
  <img className=" border border-amber-10"
    src={`http://metamedia.com/api/post/public/postData/${item.mediaUrl[0]}`}
    alt=""
  />
</div>
   

})}

</>

)}
          
          
          
         
         
         
        </div>
      </div>
    </>
  );
};



export default PostsComponent;   
