import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const {user , loginWithRedirect} = useAuth0();
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className="h-80 rounded-2xl border-2 border-gray-200 p-5">
          <div className="flex justify-center items-center animate-pulse">
            <img src="./assets/logo.png" className="h-14"></img>
          </div>

          <div className="mt-10">
            <p className=" font-sans font-medium text-xl">Sign in</p>

            <p className="mt-2 font-sans text-sm font-thin animate-pulse">
              Get Redirected to Auth0
            </p>
          </div>
          <div>
            <button onClick={(e)=> loginWithRedirect()} className=" mt-6 font-sans font-thin text-xs border-2 border-black border-solid pt-2 pb-2 pl-44 pr-44 hover:rounded-3xl hover:bg-black hover:text-white duration-1000 ease-in-out">
              LOGIN WITH REDIRECT
            </button>
            <div className=" flex gap-10 mt-5">
              <button className="font-sans font-thin text-blue-400 hover:text-blue-700 duration-1000 ease-in-out">
                Privacy Policy
              </button>
              <button className="font-sans font-thin text-blue-400  hover:text-blue-700 duration-1000 ease-in-out">
                Terms Of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
