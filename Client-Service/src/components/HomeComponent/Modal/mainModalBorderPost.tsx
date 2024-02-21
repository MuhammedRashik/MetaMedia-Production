import { useState } from "react";
import AddPostDetailsBody from "./AddPostDetailsBody"
import CreatePostModalBody from "./CreatePostmodalBody"
import CropImageBody from "./CropimageBody"

const MainModalBorderPost=({setIsAddPost,addPost,setAddPost}:any)=>{

    const [postState,setPostState]=useState(1)


    return (
        <>
         <div className="flex justify-center w-full h-full   ">




         {postState === 1 && <CreatePostModalBody setIsAddPost={setIsAddPost} setPostState={setPostState} />}
        {postState === 2 && <CropImageBody setPostState={setPostState} />}
        {postState === 3 && <AddPostDetailsBody setPostState={setPostState} addPost={addPost} setAddPost={setAddPost}/>}



 

</div>
        </>
    )
}

export default MainModalBorderPost