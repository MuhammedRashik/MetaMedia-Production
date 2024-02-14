import React, { useState } from 'react'
import Sidebar from "../../components/HomeComponent/SidebarComponent";
import Footer from "../../components/HomeComponent/FooterComponent";


const AsideComponent = ({sidebarOpen,isAddPost,setIsAddPost}:any) => {

  return (
       <>
        <div className="fixed sm:z-10 h-screen hidden sm:flex ">
          <Sidebar
            open={sidebarOpen}
            isAddPost={isAddPost}
            setIsAddPost={setIsAddPost}

          />
        </div>
        <Footer/>
    </>
  )
}

export default AsideComponent