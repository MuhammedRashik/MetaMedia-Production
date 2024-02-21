import React, { useEffect, useState } from "react";
import Sidebar from "../../components/HomeComponent/SidebarComponent";
import MainBody from "../../components/HomeComponent/MainBodyComponent";
import Search from "../../components/HomeComponent/SearchComponent";
import Message from "../../components/HomeComponent/MessageComponent";
import Post from "../../components/HomeComponent/PostComponent";
import Profile from "../../components/HomeComponent/ProfileComponent";
import Create from "../../components/HomeComponent/CreateComponent";
import Notification from "../../components/HomeComponent/NotificationComponent";
import Footer from "../../components/HomeComponent/FooterComponent";
import Settings from "./Settings";
import { Route, Routes } from "react-router-dom";
import AsideComponent from "../../components/HomeComponent/AsideComponent";
import SelectPostModal from "../../components/HomeComponent/SelectPostModal";
import MainModalBorderPost from "../../components/HomeComponent/Modal/mainModalBorderPost";



export interface SetSidebarOpenFunction {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isAddPost,setIsAddPost] = useState(false)
  const [addPost,setAddPost] = useState(false)
 
  return (
    <>
   


        <AsideComponent sidebarOpen={sidebarOpen} setIsAddPost={setIsAddPost} isAddPost={isAddPost} />
       {isAddPost && (
        <>
        <MainModalBorderPost setIsAddPost={setIsAddPost} addPost={addPost} setAddPost={setAddPost}  />
        </>
       )}
       
    <Routes>
      {/* <Route path="/" element={<AsideComponent setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} sidebaropen={sidebaropen}/>} > */}
          <Route path="/" element={<MainBody setSidebarOpen={setSidebarOpen}/>} />
          <Route path="/search" element={<Search setSidebarOpen={setSidebarOpen}/>} />
          <Route path="/message" element={<Message setSidebarOpen={setSidebarOpen}/>} />
          <Route path="/post" element={<Post setSidebarOpen={setSidebarOpen}/>} />
          <Route path="/profile" element={<Profile setSidebarOpen={setSidebarOpen} isAddPost={isAddPost}/>} />
          <Route path="/notification" element={<Notification setSidebarOpen={setSidebarOpen}/>} />
          <Route path="/settings/*" element={<Settings setSidebarOpen={setSidebarOpen}/>} />
          
      {/* </Route> */}
    </Routes>
    




    </>
  );
};

export default Home;
