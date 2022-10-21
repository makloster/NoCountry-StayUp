import React from "react";
import { Link } from "react-router-dom";

const TabsNavegacion = ({ active }) => {
    return (
        <div className="w-full h-[80px] bg-[#5E5E5E] flex flex-row rounded-tl-[15px] rounded-tr-[15px]">
            <Link
                to={"./verGrupos"}
                className={
                    active === 1
                        ? "w-[33.33%] flex justify-center items-center bg-white rounded-tl-[15px] rounded-tr-[15px] text-[#F6163C] cursor-pointer"
                        : "w-[33.33%] flex justify-center items-center text-white cursor-pointer"
                }>
                Mi local
            </Link>
            <Link
                className={
                    active === 2
                        ? "w-[33.33%] flex justify-center items-center bg-white rounded-tl-[15px] rounded-tr-[15px] text-[#F6163C] cursor-pointer"
                        : "w-[33.33%] flex justify-center items-center text-white cursor-pointer"
                }>
                Ver grupos
            </Link>
            <Link
                className={
                    active === 3
                        ? "w-[33.33%] flex justify-center items-center bg-white rounded-tl-[15px] rounded-tr-[15px] text-[#F6163C] cursor-pointer"
                        : "w-[33.33%] flex justify-center items-center text-white cursor-pointer "
                }>
                Mi cuenta
            </Link>
        </div>
    );
};

export default TabsNavegacion;
