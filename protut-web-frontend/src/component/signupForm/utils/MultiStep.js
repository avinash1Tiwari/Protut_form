import React, { useState } from "react";
import Form1 from "../FormOne";
import Form2 from "../FormTwo";
import Form3 from "../FormThree";

import { GiCheckMark } from "react-icons/gi";

const MultiStep = () => {
  const forms = 3;
  const [currentForm, setCurrentForm] = useState(0);
  const [complete, setComplete] = useState(false);

  const[formData,setFormData] = useState({
    formdata1:{},
    formdata2:{x2:"s"},
    formdata3:{x3:"L"}
  })


  const changeHandler = (event) =>{

    const{name,value,checked,type} = event.target

    setFormData(previousData =>{
      return{
        ...previousData,
        [name] : value
        
      }
    })
  }


  return (
    <>
        <div className="flex align-middle justify-between w-1/2 mt-10 m-auto mb-10">
          {Array(forms)
            .fill("")
            .map((e, i) => (
              <div
                key={i}
                className={`relative flex justify-between items-center w-36 ${
                  i !== forms - 1 &&
                  "content-[''] bg-slate-200 absolute w-full h-[3px] mt-4"
                } ${currentForm - 1 >= i && "bg-green-500"}  ${
                  currentForm === i && "active"
                } ${(i < currentForm || complete) && "complete"} `}
              >
                <div className="w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white form">
                  {i < currentForm || complete ? <GiCheckMark /> : i + 1}
                </div>
              </div>
            ))}
        </div>
        <div>
          {currentForm === 0 ? (
            <Form1 setCurrentForm={setCurrentForm} currentForm={currentForm} formData={formData} setFormData={setFormData} changeHandler = {changeHandler}/>
          ) : currentForm === 1 ? (
            <Form2 setCurrentForm={setCurrentForm} currentForm={currentForm} formData={formData} setFormData={setFormData} changeHandler = {changeHandler}/>
          ) : (
            <Form3
              setCurrentForm={setCurrentForm}
              currentForm={currentForm}
              setComplete={setComplete}
              formData={formData} setFormData={setFormData}
              changeHandler = {changeHandler}
            />
          )}
        </div>
    </>
  );
};

export default MultiStep;
