import React from "react";
import { FaRegBell, FaRegUserCircle, FaRegComment } from "react-icons/fa";
import { BiSearchAlt2, BiSlider } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-[90px]   relative">
      <img
        src="./assets/navbar.png"
        alt=""
        className="absolute w-full bottom-0 left-0"
      />
      <div className="w-full h-[90px]  z-50 absolute left-0 top-0  flex justify-center">
        <div className="w-full max-w-[1200px] h-[100%]  p-2  flex items-center">
          <div className="w-full h-[46px]  flex justify-between items-center">
            <div>
              <img src="./assets/logo.png" alt="" />
            </div>

            <div className="w-[400px] h-full shadow-final rounded-r-[22px] rounded-l-[22px] flex justify-between items-center ">
              <div className="w-[36px] h-[36px] bg-rose-600 rounded-[50%] ml-2 flex justify-center items-center text-white cursor-pointer">
                <BiSearchAlt2 className="w-[26px] h-[26px]" />
              </div>

              <div>
                <input
                  class=" w-[280px] border border-transparent focus:outline-none  "
                  placeholder="¿ Que quieres hacer ?"
                />
              </div>

              <div className="w-[36px] h-[36px] border border-black rounded-[50%] mr-2 flex justify-center items-center ">
                <BiSlider className="w-[26px] h-[26px]" />
              </div>
            </div>

            <div className=" flex flex-row">
              <div className="h-[30px] flex items-center mr-5  cursor-pointer">
                Ingresa tu local
              </div>
              <div className=" flex flex-row">
                <FaRegComment className="w-[30px] h-[30px] ml-2 cursor-pointer" />
                <FaRegBell className="w-[30px] h-[30px] ml-2 cursor-pointer" />
                <FaRegUserCircle className="w-[30px] h-[30px] ml-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
