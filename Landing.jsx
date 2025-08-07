import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const texts = ["BOOOO", "NEW DROP - NOW LIVE", "EXTENSION FOR YOUR EXPRESSION"];
const navItems = ["NEW IN", "APPAREL", "STORES"];

const Landing = () => {
  const [ind, setInd] = useState(0);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const navi = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setInd((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoginAlert(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white min-h-screen cursor-pointer">
      {showLoginAlert && (
        <div className="fixed top-40 right-6 z-50 bg-white shadow-lg border border-gray-300 p-4 rounded-xl animate-bounce flex flex-col items-center">
          <p className="text-sm font-semibold mb-2">Still Window Shopping ?</p>
          <button
            onClick={() => navi("/Login")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Login Now
          </button>
        </div>
      )}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30">
        <div className="bg-black h-6 flex justify-center items-center">
          <p className="text-white text-xs">{texts[ind]}</p>
        </div>
        <div className="mt-2 relative flex items-center justify-between px-4">
          <div className="flex">
            <img
              src="./assets/logo.png"
              className="h-16 transition-transform animate-pulse hover:scale-125 duration-1000"
              alt="Logo"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-x-14">
            {navItems.map((item, index) => (
              <p
                key={index}
                className="text-black font-sans text-sm font-medium hover:scale-125 duration-1000 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-10 mt-3">
            <button>
              <img
                src="./assets/magnifying-glass.png"
                className="h-11 hover:scale-125 duration-1000"
                alt="Search"
              />
            </button>
            <button onClick={() => navi("/Login")}>
              <img
                src="./assets/private-account.png"
                className="h-14 hover:scale-125 duration-1000"
                alt="Login"
              />
            </button>
            <button>
              <img
                src="./assets/shopping-cart.png"
                className="h-14 transition-transform hover:scale-125 duration-1000"
                alt="Cart"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <img src="./assets/main1.jpg" className="h-auto w-full animate-pulse" />
        <p className="absolute text-black text-4xl font-bold ml-28 drop-shadow-xl">BOOOO</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="font-sans font-thin text-xs border-2 border-black border-solid pt-2 pb-2 pl-4 pr-4 hover:rounded-3xl hover:bg-black hover:text-white duration-1000 ease-in-out">
          Shop All
        </button>
      </div>
      <div className="flex items-center gap-6">
        <img src="./assets/pic1.jpg" className="h-80 ml-11 mt-16 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pic2.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pc3.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pic4.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
      </div>
      <div className="flex items-center">
        <p className="flex font-sans mt-8 ml-16 text-sm gap-20">
          $29<p className="font-sans">Hell To Fire Loose Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-16 text-sm gap-16">
          $39<p className="font-sans">Demons Death Over-Sized Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-10 text-sm gap-28">
          $44<p className="font-sans">Charcoal Charm Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-14 text-sm gap-36">
          $49<p className="font-sans">Veg Vaga Dry Fit Tee</p>
        </p>
      </div>
      <div className="flex items-center gap-6">
        <img src="./assets/xyz.jpg" className="h-80 ml-11 mt-16 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/red.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/DSC05165170.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/IMG_7758.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
      </div>
      <div className="flex items-center">
        <p className="flex font-sans mt-8 ml-16 text-sm gap-20">
          $19<p className="font-sans">Tiger Shot Loose Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-16 text-sm gap-24">
          $29<p className="font-sans">Slay Red Over-Sized Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-20 text-sm gap-36">
          $34<p className="font-sans">LiL'Evy Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-20 text-sm gap-24">
          $9<p className="font-sans">Blue Bazzinga Dry Fit Tee</p>
        </p>
      </div>
      <div className="flex items-center gap-6">
        <img src="./assets/pic9.jpg" className="h-80 ml-11 mt-16 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pic10.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pic11.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
        <img src="./assets/pic12.jpg" className="h-80 mt-14 rounded-xl hover:scale-90 shadow-gray-700 shadow-xl duration-1000" />
      </div>
      <div className="flex items-center">
        <p className="flex font-sans mt-8 ml-16 text-sm gap-14">
          $9<p className="font-sans">Cooked Car Loose Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-16 text-sm gap-24">
          $5<p className="font-sans">Black Drag Over-Sized Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-20 text-sm gap-24">
          $8<p className="font-sans">Pinkcess Pink Fit Tee</p>
        </p>
        <p className="flex font-sans mt-8 ml-20 text-sm gap-24">
          $10.25<p className="font-sans">Waga's White Dry Fit Tee</p>
        </p>
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="font-sans font-thin text-xs border-2 border-black border-solid pt-2 pb-2 pl-4 pr-4 hover:rounded-3xl hover:bg-black hover:text-white duration-1000 ease-in-out">
          DISCOVER MORE
        </button>
      </div>
      <div className="w-full h-10 bg-black mt-20"></div>
      <div className="h-44 w-full">
        <img src="./assets/logo.png" className="h-32 top-0 ml-10 pt-16" />
        <p className="font-sans font-thin text-xs ml-12 mt-24">
          © 2025 BOO RETAIL PRIVATE LIMITED, ALL RIGHTS RESERVED.
        </p>
        <div className="flex justify-center items-center">
          <p className="font-sans font-medium text-xs absolute mb-80 pb-5 ml-96">HELP</p>
          <button className="font-sans font-thin text-xs absolute mb-60 pb-14 ml-96 pl-14 hover:underline">MEMBER LOGIN</button>
          <button className="font-sans font-thin text-xs absolute mb-52 pb-14 ml-96 mt-3 hover:underline">FAQ</button>
          <button className="font-sans font-thin text-xs absolute mb-44 pb-14 ml-96 pl-14 mr-12 mt-6 hover:underline">TERMS</button>
        </div>
        <div className="flex justify-center items-center absolute right-56">
          <p className="font-sans font-medium text-xs absolute mb-80 pb-7">COMPANY</p>
          <button className="font-sans font-thin text-xs absolute mb-60 pb-16 mr-5 hover:underline">STORY</button>
          <button className="font-sans font-thin text-xs absolute mb-52 pb-16 mt-5 ml-3 hover:underline">MOTIVATION</button>
          <button className="font-sans font-thin text-xs absolute mb-44 pb-14 ml-2 mt-6 hover:underline">INCENTIVES</button>
        </div>
      </div>
      <div className="flex gap-32 w-full h-10 bg-black mt-20">
        <span className="text-white font-light font-sans text-xs pt-3 pl-2">CONNECT</span>
        <button className="text-white font-light font-sans text-xs pt-3 pl-2 ml-96 pl-96 pb-3 hover:underline">YOUTUBE</button>
        <button className="text-white font-light font-sans text-xs pt-3 pl-2 pb-3 hover:underline">INSTAGRAM</button>
        <button className="text-white font-light font-sans text-xs pt-3 pl-2 pb-3 hover:underline">LINKEDIN</button>
      </div>
    </div>
  );
};

export default Landing;
