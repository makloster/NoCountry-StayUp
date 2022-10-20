import React from "react";
import { Link } from "react-router-dom";
const ButtonPublicar = () => {
    return (
        <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
            {" "}
            <Link to={"./actividadPublicada"}>
                <button className='w-[315px] h-[51px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center'>
                    Publicar Actividad
                </button>
            </Link>
        </div>
    );
};

export default ButtonPublicar;
