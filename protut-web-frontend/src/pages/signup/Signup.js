import React from 'react';
import BannerImage from '../../assets/protutImage/logo.png';
import GoogleIcon from '../../assets/socialProfileImages/google.png';
import LinkedInIcon from '../../assets/socialProfileImages/linkedin.png';
const Signup= () => {
  return (
    <div className="h-screen lg:flex lg:flex-row">
    <div className=" lg:w-[53rem] lg:h-full  flex flex-col justify-center items-center bg-white h-screen">
    <form className="flex flex-col justify-center items-center bg-white h-screen">
      <div className="bg-white  rounded-lg p-10 w-[27rem] h-[30rem]">
      <img src={BannerImage} alt="" className=" w-44 h-12 mx-auto mb-6" />
         <h1 className='text-center text-2xl font-bold mb-6'>Signup as candidate</h1>
         <input
          type="name"
          placeholder="Name"
          required
          className="border border-gray-300 bg-gray-100 rounded-md px-3 py-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border border-gray-300 bg-gray-100 rounded-md px-3 py-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border border-gray-300 bg-gray-100 rounded-md px-3 py-2 mb-4 w-full"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-full">
          Signup
        </button>
        <div className="flex items-center mb-4 w-full">
          <hr className="w-full border-gray-300" />
          <span className="mx-3">Or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <div className="flex mb-4 w-full justify-center space-x-11">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
           <img src={GoogleIcon} alt="Google" />
          </div>
          <div className="w-12 h-12 first:rounded-full flex items-center justify-center">
          <img src={LinkedInIcon} alt="LinkedIn" />
          </div>
        </div>
        <h1 className="text-center mt-5">
         Already have an account? 
        </h1>
        <p className="text-blue-500 mt-3 text-center cursor-pointer">Login here</p>
      </div>
    </form>
    <h1 className="text-sm">This site is protected by the Brand-Name</h1>
        <span className="text-xs">Privacy Policy and Terms of Service</span>
    </div>
     <div className='hidden lg:block'>

    <div className="right lg:flex lg:flex-col lg:justify-center lg:items-center w-[67rem] bg-gradient-to-br from-gray-800 to-gray-900 text-white h-full p-8 rounded-lg shadow-lg relative overflow-hidden">
  <h1 className="text-3xl mb-4">Let's Begin the Journey of Real Knowledge</h1>
  <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod consequatur obcaecati minus quos autem ab at ex voluptatum, consequuntur ad, numquam nobis laboriosam nihil.</p>
</div>
     </div>


</div>
  );
}

export default Signup;
