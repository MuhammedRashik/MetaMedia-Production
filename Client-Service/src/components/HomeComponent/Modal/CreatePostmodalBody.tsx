import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { X } from "lucide-react";
import { addImage, addVideo,clearImages } from '../../../utils/ReduxStore/Slice/postSlice'; // Import the actions
import {useDispatch,useSelector} from 'react-redux'
const CreatePostModalBody = ({setIsAddPost,setPostState}:any) => {

    const [CamaraOn, setCamaraOn] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
   

    const dispatch=useDispatch()





    const openGallery = () => {
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.click();
      } else {
        console.error("File input element not found");
      }
    };
    const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData();
      const files = e.target.files;
  
      if (files) {
          dispatch(clearImages());
  
          for (let i = 0; i < files.length; i++) {
              const file = files[i];
              
              // Check if the file is an image
              if (file.type.startsWith('image/')) {
                  const reader = new FileReader();
  
                  reader.onload = (e:any) => {
                      const imageDataURL = e.target.result;
                      console.log('this is imgage data url',imageDataURL);
                      
                      dispatch(addImage(imageDataURL));
                  };
  
                  reader.readAsDataURL(file);
              } 
              // Check if the file is a video
              else if (file.type.startsWith('video/')) {
                  // Dispatch addVideo action for videos if needed
                  // dispatch(addVideo(file));
              } else {
                  // Handle invalid file types
                  console.error('Invalid file type:', file.type);
                  continue; // Skip to the next file
              }
  
              formData.append("files[]", file);
          }
  
          setPostState(2);
      }
  };
  
    const openCamara = () => {
      setCamaraOn(true);
    };
  
    const handleClose=()=>{
        setIsAddPost(false)
    }



  return (
    <>
    <div className="fixed top-32 md:h-5/6 w-full md:top-16 z-10   sm:w-2/4   flex justify-center border text-white rounded-lg border-gray-500  bg-white" >


      <div className="flex-col w-full   ">


        { !CamaraOn ?
         ( 
         <>
         <div className="w-full  p-4 flex justify-between sm:border-b sm:border-b-gray-200 	">
        <div></div>
          <div className="">
           
            <p className="font-sans font-bold sm:font-semibold text-[#042F2C] text-md sm:text-lg">
              Select your post
            </p>
          </div>
          <div className="flex justify-start "><X onClick={handleClose} className="text-black text-start"/></div>
        </div>
        

        <div className="flex justify-center p-4  mt-10 sm:p-8">
          <img
            className="sm:w-56 sm:h-56 lg:w-72 lg:h-72  h-44 w-44 animate-bounce  "
            src="https://i.pinimg.com/564x/74/cc/77/74cc772d81d7dae27041a65f1cd9ac8b.jpg"
            alt=""
          />
        </div>
        <div className="sm:p-5"></div>
        <div className="flex justify-center sm:pt-5 pt-20 p-10 md:mt-14">
          <div className="flex  gap-6 ">
            <input
              type="file"
              name="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={getImage}
              accept="image/*, video/*"
              multiple
            />
            <button
              className="bg-teal-800 text-white p-2 text-[10px] sm:text-[15px] rounded-lg w-28 h-10 sm:w-40"
              onClick={openGallery}
            >
              {" "}
              Select from gallary
            </button>
            <button
              className="bg-teal-800 text-white p-2 text-[10px] sm:text-[15px] rounded-lg w-28 h-10 sm:w-40 "
              onClick={openCamara}
            >
              Take a picture{" "}
            </button>
          </div>
        </div>
         
         
         
         </>)
         
         
         
         
         
         
         : ( <>

<CamaraModal
            imgSrc={imgSrc}
            setImgSrc={setImgSrc}
            setCamaraOn={setCamaraOn}
            setPostState={setPostState}
          />
         
         </>)}
        
      </div>
      </div>
    </>
  );
};

export default CreatePostModalBody;


const CamaraModal = ({ imgSrc, setImgSrc, setCamaraOn ,setPostState}: any) => {

    const dispatch=useDispatch()
    const closeTheCamara = () => {
      setCamaraOn(false);
    };
    const webcamRef: any = useRef(null);
    const capture = useCallback(() => {
      const imageSrc: any = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }, [webcamRef]);
    const retake = () => {
      setImgSrc(null);
    };
    const takePicture = () => {
      capture();
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    };
    const selectImage = () => {
        console.log(imgSrc,"KKKK");
        
      //add url to redux and open the next page
   dispatch(clearImages())
   dispatch(addImage(imgSrc))
   setPostState(2)
   setImgSrc(null);
   setCamaraOn(false)
    };

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time for webcam
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout as needed

    return () => clearTimeout(timeout);
  }, []);
  
    return (
      <>
        {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"> */}
          {/* <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"> */}
            <X className="text-black m-5" onClick={closeTheCamara} />
            <div className="mx-auto max-w-md">
              <div className=" py-8 text-base flex justify-center text-gray-600">
                {imgSrc ? (
                  <img className="  rounded " src={imgSrc} alt="" />
                ) : (
                  <>
                    <Webcam
                      className="w-full h-full rounded "
                      ref={webcamRef}
                    />
                  </>
                )}
              </div>
              <div className="flex justify-center gap-6 mt-10">
                {imgSrc ? (
                  <>
                    <button
                      className="bg-teal-800 w-32 text-white text-lg  font-semibold rounded"
                      onClick={retake}
                    >
                      Retake
                    </button>
                    <button
                      className="bg-teal-800 w-32 text-white text-lg  font-semibold rounded "
                      onClick={selectImage}
                    >
                      Select
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-teal-800 w-32 text-white text-lg  font-semibold rounded"
                      onClick={takePicture}
                    >
                      Click
                    </button>
                  </>
                )}
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </>
    );
  };
  