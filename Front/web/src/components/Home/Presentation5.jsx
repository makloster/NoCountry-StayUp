import vector3 from "../../assets/vectors/vector3.svg";

const Presentation5 = () => {
    return (
        <div className="w-full bg-gradient-to-b  from-[#181818] to-[#000000] md:relative md:min-h-[650px] md:bg-rose-200">
            <img
                src={vector3}
                alt=""
                className=" hidden md:block md:absolute bottom-0 left-0"
            />
            <div className="w-full md:flex md:justify-center md:absolute md:top-0 md:left-0">
                <div className="w-full flex flex-col items-center md:max-w-[1400px]  md:flex-row">
                    <div className="w-[90%] md:w-[50%]  pt-10 ">
                        <div className="w-full text-[#F6163C] text-[32px] flex items-center font-bold ">
                            Si eres organizador contáctanos
                        </div>
                        <div className="w-full  text-[#ffffff] text-[20px] text-justify">
                            Puedes ingresar tu gimnasio, cancha o actividad en
                            nuestra app, para ello solo tienes que llenar el
                            formulario y te brindaremos toda la información que
                            necesitas.
                        </div>
                    </div>
                    <div className="w-[90%] md:w-[50%] h-full flex items-center justify-center md:pt-20 md:mb-20  ">
                        <form className="pt-10 pb-10 md:pl-4 md:pr-4 rounded-[15px] flex   flex-col items-center justify-center md:bg-white">
                            <input
                                type="text"
                                className=" w-[315px] h-[45px] mb-[28px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4"
                                placeholder="Nombre completo"
                            />
                            <input
                                type="text"
                                className=" w-[315px] h-[45px] mb-[28px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4"
                                placeholder="E-mail"
                            />
                            <input
                                type="text"
                                className=" w-[315px] h-[45px] mb-[28px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4"
                                placeholder="Número de celular"
                            />
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="5"
                                placeholder="Consulta"
                                className="w-[315px] h-[110px] mb-[28px]  rounded-[15px] shadow-lg border  focus:outline-none p-4 pl-4 pr-4"></textarea>
                            <button className="w-[315px] h-[50px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center">
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation5;
