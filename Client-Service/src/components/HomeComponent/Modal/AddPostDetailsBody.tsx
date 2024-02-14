import { ArrowLeft, MapPin, Users } from "lucide-react";
import { useState } from "react";
const AddPostDetailsBody = () => {
  const [aspect, setAspect]: any = useState([1 / 1]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);

  const [text, setText] = useState("");
  const maxLength = 500;

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxLength) {
      setText(inputValue);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const tagToggleDropdown = () => {
    setIsTagOpen(!isTagOpen);
  };

  return (
    <>
    <div className="fixed top-32 md:h-5/6 w-full md:top-16 z-10 sm:ml-4  sm:w-4/6   flex justify-center border text-white rounded-lg border-gray-500  bg-white" >


      <div className="flex-col w-full  h-full ">
        <div className="w-full p-5 flex justify-center sm:border-b sm:border-b-gray-200">
          <div className="flex justify-between w-full">
            <p className="text-black">
              <ArrowLeft />
            </p>
            <p className="font-sans font-bold sm:font-semibold text-[#042F2C] text-md sm:text-lg">
              Create new post
            </p>
            <p className="text-teal-800 font-bold text-md">Post</p>
          </div>
        </div>

        <div className="w-full h-5/6  flex  ">
          <div className="w-full h-full flex flex-row">
            <div className="w-4/6">
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/86/a5/55/86a555402878df2d667eb1d5800a31b1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-2/6  p-2 ">
              <div className="w-full h-full flex flex-col">
                <div className="flex text-black p-5">
                  <div className="">
                    <img
                      className="w-10 h-10 rounded-full "
                      src="https://i.pinimg.com/564x/ba/3f/5e/ba3f5ea1343c1a7b37eb7c8b7159eeec.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pl-3 pt-3 text-md font-semibold text-teal-800 ">
                    _razik__
                  </div>
                </div>
                <div className="text-black  mt-4  w-full h-2/6 border  shadow-lg rounded-md  p-1 overflow-x-hidden flex-col">
                  <textarea
                    className="w-full h-5/6 pl-2 outline-none resize-none"
                    value={text}
                    onChange={handleChange}
                    placeholder="Write a  caption .."
                  />
                  <div className="text-sm text-gray-300 mt-1 text-end">
                    {text.length}/{maxLength}
                  </div>
                </div>
                <div className="w-full rounded-md shadow-lg h-1/6 border  mt-2  ">
                  <div className="text-teal-900 pt-8 text- flex justify-between items-center ">
                    <p className="font-semibold pl-2"> Add Location</p>
                    <MapPin />
                  </div>
                </div>
                <div className="w-full rounded-md shadow-lg h-1/6 border border-b-gray-100  mt-2 overflow-visible">
                  <div className="text-teal-900 pt-8 text- flex justify-between items-center">
                    {/* Dropdown */}
                    <div className="relative">
                      <button
                        id="dropdownToggleButton"
                        onClick={tagToggleDropdown}
                        className="text-black   focus:outline-none  font-medium rounded-lg text-sm  pl-2 text-center inline-flex items-center"
                        type="button"
                      >
                        Tag People
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Dropdown menu */}
                      <div
                        id="dropdownToggle"
                        className={`absolute z-10 ${
                          isTagOpen ? "" : "hidden"
                        } bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-white border top-full left-0 mt-1`}
                      >
                        <ul
                          className="p-3 space-y-1 text-sm text-teal-700 dark:text-teal-800 overflow-y-auto"
                          aria-labelledby="dropdownToggleButton"
                        >
                          <li>
                            <>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center px-4 py-2  "
                                >
                                  <img
                                    className="w-6 h-6 me-2 rounded-full"
                                    src="https://i.pinimg.com/564x/06/44/1b/06441b6028679dce5a25489ae592a061.jpg"
                                    alt="Jese image"
                                  />
                                  Jese Leos
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center px-4 py-2 "
                                >
                                  <img
                                    className="w-6 h-6 me-2 rounded-full"
                                    src="https://i.pinimg.com/564x/06/44/1b/06441b6028679dce5a25489ae592a061.jpg"
                                    alt="Jese image"
                                  />
                                  Robert Gough
                                </a>
                              </li>
                            </>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="flex items-center p-3 text-sm font-medium  border-t  rounded-b-lg bg-gray-50   hover:underline"
                        >
                          <svg
                            className="w-4 h-4 me-2 ml-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                          </svg>
                          Add new user
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-md shadow-lg h-1/6 border border-b-gray-100  mt-2 overflow-visible">
                  <div className="text-teal-900 pt-8 text- flex justify-between items-center">
                    {/* Dropdown */}
                    <div className="relative">
                      <button
                        id="dropdownToggleButton"
                        onClick={toggleDropdown}
                        className="text-black   focus:outline-none  font-medium rounded-lg text-sm  pl-2 text-center inline-flex items-center"
                        type="button"
                      >
                        Advance Settings
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Dropdown menu */}
                      <div
                        id="dropdownToggle"
                        className={`absolute z-10 ${
                          isOpen ? "" : "hidden"
                        } bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-white border top-full left-0 mt-1`}
                      >
                        <ul
                          className="p-3 space-y-1 text-sm text-teal-700 dark:text-teal-800"
                          aria-labelledby="dropdownToggleButton"
                        >
                          <li>
                            <>
                              <div className="flex p-2 rounded  ">
                                <label className="relative inline-flex items-center w-full cursor-pointer">
                                  <input
                                    type="checkbox"
                                    defaultValue=""
                                    className="sr-only peer"
                                  />
                                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-white-600" />
                                  <span className="ms-3 text-sm font-medium text-gray-900 ">
                                    Hide like
                                  </span>
                                </label>
                              </div>
                              <li>
                                <div className="flex p-2 rounded ">
                                  <label className="relative inline-flex items-center w-full cursor-pointer">
                                    <input
                                      type="checkbox"
                                      defaultValue=""
                                      className="sr-only peer"
                                    />
                                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-white-600" />
                                    <span className="ms-3 text-sm font-medium text-gray-900 ">
                                      Hide Comment
                                    </span>
                                  </label>
                                </div>
                              </li>
                              <li></li>
                            </>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddPostDetailsBody;
