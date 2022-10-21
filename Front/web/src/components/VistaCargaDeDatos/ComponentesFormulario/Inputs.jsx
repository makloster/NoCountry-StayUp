const Inputs = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col p-2 md:flex-row md:justify-between md:pl-[100px] md:pr-[100px] md:pt-5">
                <input
                    type="text"
                    className=" w-full  mb-5 h-[45px] rounded-[15px] shadow-lg border  focus:outline-none pl-2 pr-5 
                    md:w-[270px]"
                    placeholder="Nombre del lugar"
                />
                <input
                    type="text"
                    className=" w-full  mb-5 h-[45px] rounded-[15px] shadow-lg border  focus:outline-none pl-2 pr-5 
                    md:w-[130px]"
                    placeholder="Tamaño m2"
                />
                <select
                    defaultValue="Categoria"
                    className=" w-full  h-[45px] rounded-[15px] shadow-lg border  focus:outline-none pl-2 pr-5 
                    md:w-[280px]">
                    <option selected>Categoria</option>
                    <option value="1">Futbol</option>
                    <option value="2">Boxeo</option>
                    <option value="3">Natación</option>
                    <option value="4">Juegos de Mesa</option>
                    <option value="5">Kick Boxing</option>
                    <option value="6">Ajedrez</option>
                    <option value="7">Tiro al blanco</option>
                    <option value="8">Arco y flecha</option>
                </select>
            </div>

            <div className="w-full p-2 md:pl-[100px] md:pr-[100px] ">
                <textarea
                    name=""
                    id=""
                    placeholder="Descripcion"
                    className="w-full h-[120px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4"></textarea>
            </div>
            <div className="w-full p-2 flex flex-col md:flex-row   md:pl-[100px] md:pr-[100px] md:h-[70px] md: items-center ">
                <div className="w-full mb-2 md:mb-0">
                    ¿Cuántas personas pueden asistir en cada grupo? (deben ser
                    más de 3)
                </div>
                <select
                    defaultValue={3}
                    className=" w-full md:w-[150px] h-[45px] rounded-[15px] shadow-lg border  focus:outline-none  pl-4 pr-4
                    mb-5 md:mb-0">
                    <option selected>Personas</option>
                    <option value="1">3</option>
                    <option value="2">4</option>
                    <option value="3">5</option>
                    <option value="4">6</option>
                    <option value="5">7</option>
                    <option value="6">8</option>
                    <option value="7">9</option>
                    <option value="8">10</option>
                </select>
            </div>
        </div>
    );
};

export default Inputs;
