import React, { useState,useRef } from "react";
import skillsData from "./assets/skills.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import positions from "./assets/positions.json";
import { FaUserCircle } from "react-icons/fa";
const FormOne = ({ setCurrentForm,formData,setFormData,}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [arrowRotated, setArrowRotated] = useState(false);
  const [profileImg,setProfileImg] = useState('');
  const skills = skillsData;
  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setIsOpen(false);
    setArrowRotated(false);
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(
      selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  const filteredSkills = skills.filter(
    (skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedSkills.includes(skill)
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setArrowRotated(!arrowRotated);
  };

  const [socialProfiles, setSocialProfiles] = useState([
    { type: "LinkedIn", profile: "" },
  ]);


  const [experiences, setExperiences] = useState([
    { company: "", position: "", startDate: null, endDate: null },
  ]);

  const handleAddProfile = (e) => {
    e.preventDefault();
    setSocialProfiles([...socialProfiles, { type: "LinkedIn", profile: "" }]);
  };

  const handleInputChange = (index, value) => {
    const updatedProfiles = [...socialProfiles];
    updatedProfiles[index].profile = value;
    setSocialProfiles(updatedProfiles);
  };

  const handleSelectChange = (index, value) => {
    const updatedProfiles = [...socialProfiles];
    updatedProfiles[index].type = value;
    setSocialProfiles(updatedProfiles);
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperiences([
      ...experiences,
      { company: "", position: "", startDate: null, endDate: null },
    ]);
  };

  const handleExperienceDateChange = (index, field, date) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = date;
    setExperiences(updatedExperiences);
  };

  const handleExperienceInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleNextForm = (e) => {
    e.preventDefault();
    setCurrentForm((currentForm) => currentForm + 1);
      const currdata = {...formData}
      currdata.formdata1 = localdata
      setFormData(currdata)
  };

  const inputImg = useRef();
  const handelImgaeClick=()=>{
    inputImg.current.click();
  }
  const handelProfileImg=(event)=>{
    setProfileImg(event.target.files[0]);
  }



  const [localdata,setlocaldata] = useState({firstName:"",lastName:"",county:"",personalUrl:"",phone:"",tagline:""})


  const changeHandler = (event) =>{
    const {name,value} = event.target;
    setlocaldata(prev =>{
      return{
        ...prev,
        [name] :value
      }
    })
  }
 
// console.log("localdata")
// console.log(localdata)



  return (
    <>
      <div className="max-w-full md:block flex justify-center items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full flex flex-col justify-center text-center">
          <div
            onClick={handelImgaeClick}
            className="w-15 h-15 m-auto border-2 p-2 cursor-pointer"
          >
            {profileImg ? (
              <img
                src={URL.createObjectURL(profileImg)}
                alt=""
                className="w-16 h-16"
              />
            ) : (
              <FaUserCircle className="text-5xl" />
            )}
            <input
              type="file"
              ref={inputImg}
              onChange={handelProfileImg}
              className="hidden"
            />
          </div>
          <p>Coach</p>
          <p>coach@gmail.com</p>
        </div>
        <form className="bg-white p-4 md:mx-16 lg:w-max-w-md lg:justify-center lg:items-center lg:mx-48 xl:mx-48">
          <div>
            <h1>Basic Details</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name*
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value = {formData.firstName}
                onChange={changeHandler} 
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                onChange={changeHandler} 
                value = {formData.lastName}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="persona-url"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Make Personal URL*
              </label>
              <input
                type="text"
                id="persona-url"
                name="personalUrl"
                value = {formData.personalUrl}
                onChange={changeHandler} 
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="phone-number"
                name="phone"
                value = {formData.phone}
                onChange={changeHandler} 
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value = {formData.country}
                onChange={changeHandler} 
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="tagline"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value = {formData.tagline}
                onChange={changeHandler} 
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <h1 className="my-4 block mb-2 font-medium text-gray-900 dark:text-white">
            Skills
          </h1>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={toggleDropdown}
              placeholder="Search skill"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full px-4 py-2 text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={toggleDropdown}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                className={`h-4 w-4 transition-transform transform ${
                  arrowRotated ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className="top-full left-0 right-0 bg-white rounded-b-md shadow-lg mt-1"
              style={{
                display: isOpen ? "block" : "none",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <div className="py-1" role="none">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    onClick={() => handleSkillSelect(skill)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    role="menuitem"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap" style={{ maxWidth: "100%" }}>
              {" "}
              {/* Modified */}
              {selectedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2"
                >
                  <span className="text-gray-700">{skill}</span>
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="ml-2 focus:outline-none"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <h2 className="my-4 block mb-2 font-medium text-gray-900 dark:text-white">
            Add Social Profile
          </h2>
          <div className="flex flex-col md:block justify-center items-center">
            {socialProfiles.map((profile, index) => (
              <div key={index} className="">
                <div className="flex flex-row items-center mb-4">
                  <select
                    className="w-1/3 mr-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    value={profile.type}
                    onChange={(e) => handleSelectChange(index, e.target.value)}
                  >
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                    <option value="GitHub">GitHub</option>
                  </select>
                  <input
                    className="w-2/3 bg-gray-100 border border-gray-300 rounded-md py-2 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter profile URL or handle"
                    value={profile.profile}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </div>
              </div>
            ))}
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleAddProfile}
            >
              Add More Profiles
            </button>
          </div>
          <h2 className="my-4 mb-2 font-medium text-gray-900 dark:text-white">
            Add Experience
          </h2>
          <div className="md:block flex flex-col justify-center items-center">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="gap-4 grid grid-cols-2 flex flex-row items-center mb-4"
              >
                <input
                  className=" mr-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) =>
                    handleExperienceInputChange(
                      index,
                      "company",
                      e.target.value
                    )
                  }
                />
                <select
                  className="mr-2 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  value={experience.position}
                  onChange={(e) =>
                    handleExperienceInputChange(
                      index,
                      "position",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select Position</option>
                  {positions.map((position, index) => (
                    <option key={index} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
                <div className="flex flex-row">
                  <DatePicker
                    className="max-w-40 mr-8 md:max-w-40 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    selected={experience.startDate}
                    onChange={(date) =>
                      handleExperienceDateChange(index, "startDate", date)
                    }
                    placeholderText="Start Date"
                  />
                  <DatePicker
                    className="bg-gray-100 w-40 border max-w-44 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    selected={experience.endDate}
                    onChange={(date) =>
                      handleExperienceDateChange(index, "endDate", date)
                    }
                    placeholderText="End Date"
                  />
                </div>
              </div>
            ))}
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleAddExperience}
            >
              Add More Experiences
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleNextForm}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormOne;
