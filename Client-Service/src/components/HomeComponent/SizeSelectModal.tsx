import { useState } from "react";
import { cloudinary } from "../../utils/Cloudinary/Cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { ArrowLeft } from "lucide-react";
import { scale } from "@cloudinary/url-gen/actions/resize";
import Cropper from "react-easy-crop";
import { Scaling, ZoomIn, ZoomOut } from "lucide-react";
import { toast } from "sonner";
const SizeSelectModal = () => {



  const [imgSrc, setImgSrc] = useState({
    src1: "https://i.pinimg.com/564x/23/44/4c/23444cbdc9b6130cb8d7e3dc65f226ed.jpg",
    src2: "https://i.pinimg.com/564x/36/6a/b6/366ab65c58dcf82d507a462dcd6b8258.jpg",
  });
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectedImageSrc, setSelectedImageSrc] = useState(imgSrc.src2);
  const [isImg, setIsImg] = useState(true);
  const [isVedio, setIsVedio] = useState(false);
  const [aspect, setAspect]: any = useState([1 / 1]);
  const [openSelectSize, setOpenSelectSize] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);


//handle zoom in 
  const handleZoomIn = () => {
    if (zoom < 3) {
      setZoom(zoom + 0.1);
    }
  };
//handle zoom out
  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 0.1);
    }
  };
//change the aspect ratio 
  const changeSize = (size: any) => {
    setAspect(size);
  };

//crop the image
  const handleCropComplete = (
    croppedArea: { x: number; y: number; width: number; height: number },
    croppedAreaPixels: { x: number; y: number; width: number; height: number }
  ) => {
    console.log("Cropped Area:", croppedArea);
    console.log("Cropped Area Pixels:", croppedAreaPixels);
  };

  //open the small modal of aspect size
  const openSize = () => {
    setOpenSelectSize(!openSelectSize);
  };

  //save the image and open next modal
  const handleNext=()=>{
    
  }


  return (
    <>
      {isImg && (
        <>
          <div className="w-full h-full  flex justify-center p-16 ">
            <div className="w-2/3 h-2/3 flex justify-center sm:border rounded-lg sm:border-gray-200 sm:h-[650px]">
              <div className="flex-col w-full h-full ">
                <div className="w-full p-4 flex justify-center sm:border-b sm:border-b-gray-200">
                  <div className="flex justify-between w-full">
                    <p>
                      <ArrowLeft />
                    </p>
                    <p className="font-sans font-bold sm:font-semibold text-[#042F2C] text-md sm:text-lg">
                      Crop
                    </p>
                    <p className="text-teal-800 font-bold text-md" onClick={handleNext}>Next</p>
                  </div>
                </div>
                <div className="w-full h-full   ">
                  {selectedImageSrc && (
                    <>
                      <div className="flex justify-center w-full h-[587px] flex-col ">
                        <div className="w-full h-full flex justify-center   ">
                          <Cropper
                            image={selectedImageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={aspect}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={handleCropComplete}
                            style={{
                              containerStyle: {
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                backgroundColor: "white",
                              },
                              mediaStyle: {
                                width: "",
                                height: "",
                                display: "block",
                              },
                              cropAreaStyle: {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              },
                            }}
                          />
                        </div>

                        <div className="w-full flex justify-center  p-3 rounded ">
                          <ZoomOut className="mt-2 " onClick={handleZoomOut} />
                          <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e: any) => {
                              setZoom(e.target.value);
                            }}
                            className="zoom-range"
                          />
                          <ZoomIn className="mt-2 " onClick={handleZoomIn} />

                          <div
                            className=" pl-8 w-10 h-10   p-2"
                            onClick={openSize}
                          >
                            <Scaling />
                          </div>
                          {openSelectSize && (
                            <>
                              <div className="fixed  flex-col  w-24 h-24 ml-96 border rounded bg-white p-1.5">
                                <div
                                  className="p-2 w-full flex justify-center border rounded "
                                  onClick={() => changeSize([1 / 1])}
                                >
                                  1:1
                                </div>
                                <div
                                  className="p-2 w-full flex justify-center border rounded "
                                  onClick={() => changeSize([4 / 5])}
                                >
                                  4:5
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isVedio && (
        <>
          <div>
            <h2>Resized Video</h2>
            {/* <Video cldVid={videoToResize} controls /> */}
          </div>
        </>
      )}
    </>
  );
};

export default SizeSelectModal;
