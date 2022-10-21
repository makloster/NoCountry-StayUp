import React from "react";
import vector5 from "../../assets/Vectors/vectorHomeP5.svg";

export const VistaContrasenaCambiada = () => {
    return (
        <div>
            <div className='w-full h-[674px] bg-gradient-to-b from-[#c0c0c0] to-[white] relative '>
                <img
                    src={vector5}
                    alt=''
                    className='absolute w-full bottom-0 left-0'
                />
                <div className=' h-full flex items-center justify-center '>
                    <form className='bg-white w-[802px] h-[396px] rounded-[15px] flex   flex-col items-center justify-center'>
                        <h1 className='w-full h-[90px] text-[#F6163C] text-[32px] font-semibold flex items-center  justify-center'>
                            Has cambiado la contraseña correctamente
                        </h1>
                        <h2>Puedes volver al panel</h2>
                    </form>
                </div>
            </div>
        </div>
    );
};
