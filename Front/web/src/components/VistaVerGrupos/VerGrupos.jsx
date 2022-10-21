import React from "react";
import vector5 from "../../assets/Vectors/vectorHomeP5.svg";
import TabsNavegacion from "../VistaCargaDeDatos/ComponentesFormulario/TabsNavegacion";

const VerGrupos = () => {
    return (
        <div>

            <div className='w-full h-[674px] bg-gradient-to-b from-[#c0c0c0] to-[white] relative '>
                <TabsNavegacion/>
                <img
                    src={vector5}
                    alt=''
                    className='absolute w-full bottom-0 left-0'
                />
                <div className=' h-full flex items-center justify-center '>
                    <form className='bg-white w-[802px] h-[396px] rounded-[15px] flex   flex-col items-center justify-center'>
                        <h1>Has publicado correctamente tu actividad</h1>
                        <h2>Ya puedes recibir grupos en tu organización</h2>
                        <h2>Puedes volver al panel</h2>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerGrupos;
