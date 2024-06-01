import React, { useState, useRef } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FaUserCircle } from "react-icons/fa";
const UserProfile = () => {
  const [profileImg, setProfileImg] = useState("");

  const [socialProfiles, setSocialProfiles] = useState([
    { type: "LinkedIn", profile: "" },
  ]);
  const inputImg = useRef();
  const handelImgaeClick = () => {
    inputImg.current.click();
  };
  const handelProfileImg = (event) => {
    setProfileImg(event.target.files[0]);
  };

  const handleSelectChange = (index, value) => {
    const updatedProfiles = [...socialProfiles];
    updatedProfiles[index].type = value;
    setSocialProfiles(updatedProfiles);
  };

  const handleInputChange = (index, value) => {
    const updatedProfiles = [...socialProfiles];
    updatedProfiles[index].profile = value;
    setSocialProfiles(updatedProfiles);
  };

  const handleAddProfile = (e) => {
    e.preventDefault();
    setSocialProfiles([...socialProfiles, { type: "LinkedIn", profile: "" }]);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center max-md:flex-wrap w-full mt-10 mb-10">
        <div className="lg:p-3 max-md:w-2/3">
          <div className="border-2 rounded-lg flex justify-center align-middle flex-col p-5 m-auto text-center">
            {profileImg ? (
              <img
                src={URL.createObjectURL(profileImg)}
                alt=""
                className="w-16 h-16 scale-125 m-auto rounded-full "
              />
            ) : (
              <FaUserCircle className="text-5xl m-auto" />
            )}
            <h1 className="p-3 text-lg">Name of User</h1>

            <div
              onClick={handelImgaeClick}
              className="w-15 h-15 m-auto cursor-pointer"
            >
              <button className="border-2 p-2 m-4 rounded-md">
                Change Profile Photo
              </button>
              <input
                type="file"
                ref={inputImg}
                onChange={handelProfileImg}
                className="hidden"
              />
            </div>

            <p>Member since xx/xx/xxxx</p>
          </div>
          <div className="border-2 rounded-lg p-5 mt-4">
            <div className="flex justify-evenly p-2">
              <p className="w-1/2  max-md:w-full">Total Number of hours Learned</p>
              <span className="mt-2">{16} hours</span>
            </div>
            <div className="flex justify-evenly p-2">
              <p className="w-1/2 max-md:w-full">Total Number of Session Attended</p>
              <span className="mt-2">{4} booking</span>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg box-border max-md:w-2/3 max-md:mt-5">
          <h1 className="text-3xl text-center font-semibold border-b-2 p-2">
            Your Information
          </h1>
          <div className="p-10">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  id="text"
                  placeholder="User Name"
                  className="w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500 "
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500 "
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500 "
                />

                <input
                  type="password"
                  name="email"
                  id=""
                  placeholder="Change password"
                  className="w-full h-10 bg-gray-100 border border-gray-300 rounded-lg px-3 focus:outline-none focus:border-blue-500 "
                />
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-center text-xl font-semibold">
                Social Profile
              </h3>
              <div className="flex flex-col md:block justify-center items-center mt-5">
                {socialProfiles.map((profile, index) => (
                  <div className="flex flex-row items-center mb-4">
                    <select
                      className="mr-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-lg"
                      value={profile.type}
                      onChange={(e) =>
                        handleSelectChange(index, e.target.value)
                      }
                    >
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter">Twitter</option>
                      <option value="GitHub">GitHub</option>
                    </select>
                    <input
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-2 focus:outline-none focus:border-blue-500"
                      type="text"
                      placeholder="Enter profile URL or handle"
                      value={profile.profile}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <button
                  className="w-1/4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleAddProfile}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-4">
            <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              save Changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
