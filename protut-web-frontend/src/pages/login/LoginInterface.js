import React from "react";
import { Button } from "keep-react";
import { SignIn } from "phosphor-react";
const LoginInterface = () => {
  return (
    <div className="h-screen lg:flex lg:flex-row">
      <div className="left h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl text-bold mb-7">
            For{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              Developers
            </span>
          </h1> 
          <p className="text-center text-xl text-pretty max-w-[30rem]">
            We are the market–leading technical interview platform to identify
            and hire developers with the right skills.
          </p>
        </div>
          <Button className="mt-5 bg-blue-600">
            <SignIn size={20} className="mr-1.5" />
            Sign Up
          </Button>
          <p className="my-2">Already have an account?</p>
          <span className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-500 active:text-blue-500">Login to continue</span>

      </div>

      <div className="right h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center items-center ">
          <h1 className="text-center text-4xl text-bold mb-7">
            For{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              Learners
            </span>
          </h1> 
          <p className="text-center text-xl text-pretty max-w-[30rem]">
            We are the market–leading technical interview platform to identify
            and hire developers with the right skills.
          </p>
        </div>
        <Button color="" className="mt-5 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out">
  <SignIn size={20} className="mr-1.5" />
  Sign Up
</Button>
          <p className="my-2">Already have an account?</p>
          <span className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-500 active:text-green-500">Login to continue</span>

      </div>
    </div>
  );
};

export default LoginInterface;
