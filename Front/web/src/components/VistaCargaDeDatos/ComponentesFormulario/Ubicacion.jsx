import React from "react";
import ubicacionMaps from "../../../assets/imagesHome/dummy5.png";

const Ubicacion = () => {
    return (
        <div>
            {" "}
            <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                <input
                    type='text'
                    className=' w-[726px] h-[45px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pr-4'
                    placeholder='Ubicacion (calle + número + ciudad)'
                />
            </div>
            <img
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                }}
                src={ubicacionMaps}
                alt='fotoMapa'
            />
            <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                <input
                    type='text'
                    className=' w-[726px] h-[91px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pr-4'
                    placeholder='Como llegar: recomendamos que ingreses todos los ómnibus por ejemplo: "Ómnibus que pasan por la zona: L119, R45, R21" También puedes ingresar si ofreces algún tipo de transporte.'
                />
            </div>
        </div>
    );
};

export default Ubicacion;
