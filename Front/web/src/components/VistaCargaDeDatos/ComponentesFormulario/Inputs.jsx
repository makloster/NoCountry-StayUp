import React from "react";

const Inputs = () => {
    return (
        <div>
            {" "}
            <div className='w-[100%] h-full items-center justify-center '>
                <form className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                    <input
                        type='text'
                        className=' w-[277px] h-[45px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pr-4'
                        placeholder='Nombre del lugar'
                    />
                    <input
                        type='text'
                        className=' w-[129px] h-[45px] rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4'
                        placeholder='Tamaño m2'
                    />
                    <select className=' w-[286px] h-[45px] rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4'>
                        <option selected>Categoria</option>
                        <option value='1'>Futbol</option>
                        <option value='2'>Boxeo</option>
                        <option value='3'>Natación</option>
                        <option value='4'>Juegos de Mesa</option>
                        <option value='5'>Kick Boxing</option>
                        <option value='6'>Ajedrez</option>
                        <option value='7'>Tiro al blanco</option>
                        <option value='8'>Arco y flecha</option>
                    </select>
                </form>
                <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                    <textarea
                        name=''
                        id=''
                        placeholder='Descripcion'
                        className='w-[726px] h-[122px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4'></textarea>
                </div>
                <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                    <h1>
                        ¿Cuántas personas pueden asistir en cada grupo? (deben
                        ser más de 3)
                    </h1>
                    <select className=' w-[286px] h-[45px] rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4'>
                        <option selected>Personas</option>
                        <option value='1'>3</option>
                        <option value='2'>4</option>
                        <option value='3'>5</option>
                        <option value='4'>6</option>
                        <option value='5'>7</option>
                        <option value='6'>8</option>
                        <option value='7'>9</option>
                        <option value='8'>10</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Inputs;
