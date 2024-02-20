import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/user/SignUp";
import Login from "../pages/user/Login";
import VerifyOtp from "../pages/user/VerifyOtp";
import ForgotPassword from "../pages/user/ForgotPassword";
import ChooseInterest from "../pages/user/ChooseInterest";
import ChangePassword from "../pages/user/ChangePassword";
import AddProfile from "../pages/user/AddProfile";
import Home from "../pages/user/Home";
import Mods from "../pages/user/Mods";
import ProtectedRoute from "./ProtectedRoute";
import S from "../pages/user/S";

import Settings from "../pages/user/Settings";
import AddPostModal from "../components/HomeComponent/AddPostcomponent";
import SizeSelectModal from "../components/HomeComponent/SizeSelectModal";
import SelectPostModal from "../components/HomeComponent/SelectPostModal";
import SinglePostModal from "../components/postComponent/SinglePostModal";
// import TestCrop from "../components/HomeComponent/Modal/testCrop";






const UserRouter = () => {
  return (  
    <>
   
    <SinglePostModal/>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verifyOtp" element={<VerifyOtp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chooseinterest" element={<ChooseInterest />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/addprofile" element={<AddProfile />} />
      <Route path="/selectMod" element={<Mods />} />
      <Route path="/s" element={<S />} />
      
      {/* <Route path="/post" element={<AddPostModal/>} /> */}
      <Route path="/size" element={<SizeSelectModal/>} />
      <Route path="/selectPost" element={<SelectPostModal/>} />
      {/* <Route path="/croping" element={<TestCrop/>} /> */}

  
     

      {/* <Route path="/logout"/> */}

    </Routes>
    </>
  );
};

export default UserRouter;
