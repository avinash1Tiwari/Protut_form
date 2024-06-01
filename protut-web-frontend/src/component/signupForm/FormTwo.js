import { Divider } from "keep-react";
import React, { useState,useEffect } from "react";

const FormTwo = ({ setCurrentForm, currentForm, formData, setFormData }) => {
  const [formDataList, setFormDataList] = useState([
    {
      title: "",
      type: "",
      duration: "",
      price: "",
      description: "",
      thumbnail: null,
      attendees: "",
      prerequisites: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormDataList = [...formDataList];
    newFormDataList[index] = { ...newFormDataList[index], [name]: value };
    setFormDataList(newFormDataList);
  };

  const handleThumbnailChange = (e, index) => {
    const file = e.target.files[0];
    const newFormDataList = [...formDataList];
    newFormDataList[index] = { ...newFormDataList[index], thumbnail: file };
    setFormDataList(newFormDataList);
  };

  const handleAddForm = () => {
    setFormDataList([
      ...formDataList,
      {
        title: "",
        type: "",
        duration: "",
        price: "",
        description: "",
        thumbnail: null,
        attendees: "",
        prerequisites: "",
      },
    ]);
  };

  // console.log(formDataList)

  // const handleform2 = (e) => {
    // setCurrentForm((prev) => prev + 1);

//     e.preventDefault();
//     // setCurrentForm((currentForm) => currentForm + 1);
//       const currdata = {...formData}
//       currdata.formdata2 = formDataList
//       setFormData(currdata)
   
// console.log("formData");
// console.log(formData);
 
  // };




  useEffect(() => {
    console.log("formData");
    console.log(formData);
}, [formData]);

const handleform2 = (e) => {
    e.preventDefault();
    setCurrentForm((prev) => prev + 1);
    const updatedFormData = { ...formData, formdata2: formDataList };
    setFormData(updatedFormData);
};



  useEffect(() => {
    console.log("formDatalist2");
console.log(formDataList);
  }, [formDataList]);


  
  const handleBackForm = (e) => {
    setCurrentForm((currentForm) => currentForm - 1);
  };

  return (
    <div className=" max-w-full md:block flex justify-center items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {formDataList.map((formData, index) => (
        <form
          key={index}
          className="bg-white p-4 md:mx-16 lg:w-max-w-md lg:justify-center lg:items-center lg:mx-48 xl:mx-48"
        >
          <div className="lg:flex mb-2 gap-4">
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Title:
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e, index)}
                required
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                Type:
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={(e) => handleChange(e, index)}
                required
                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Interview">Interview</option>
                <option value="1:1 Session">1:1 Session</option>
              </select>
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="lg:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Duration:
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={(e) => handleChange(e, index)}
                required
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="lg:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price:
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={(e) => handleChange(e, index)}
                required
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e, index)}
            required
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Thumbnail:
          </label>
          <input
            type="file"
            onChange={(e) => handleThumbnailChange(e, index)}
            accept="image/*"
            required
            className="w-full mb-3 focus:outline-none"
          />

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            What will attendees learn in this offering?
          </label>
          <input
            type="text"
            name="attendees"
            value={formData.attendees}
            onChange={(e) => handleChange(e, index)}
            required
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            What will be the prerequisites for taking this offering?
          </label>
          <input
            type="text"
            name="prerequisites"
            value={formData.prerequisites}
            onChange={(e) => handleChange(e, index)}
            required
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <div className="my-8">
            {index === formDataList.length - 1 && (
              <button
                type="button"
                onClick={handleAddForm}
                className="block bg-blue-500 text-white mb-8 my-4 px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add
              </button>
            )}
            <Divider
              color="primary"
              size="lg"
              className="w-full border-gray-300"
            />
          </div>
        </form>
      ))}
      <div className="flex justify-center items-center mt-8">
        <button
          type="button"
          onClick={handleBackForm}
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleform2}
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 m-2"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FormTwo;
