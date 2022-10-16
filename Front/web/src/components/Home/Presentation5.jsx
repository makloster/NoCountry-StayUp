import vector5 from "../../assets/vectorp5.svg";

const Presentation5 = () => {
    return (
        <div className="w-full h-[600px] bg-gradient-to-b from-[#181818] to-[#000000] relative ">
            <img
                src={vector5}
                alt=""
                className="absolute w-full bottom-0 left-0"
            />
            <div className="w-full h-full absolute bottom-0 left-0 flex items-center justify-center ">
                <div className="w-[90%] h-full max-w-[1400px]  flex flex-row ">
                    <div className="w-[60%] h-full   flex items-center justify-center">
                        <div className="w-full">
                            <div className="w-full h-[90px] text-[#F6163C] text-[32px] font-semibold flex items-center">
                                Si eres organizador contáctanos
                            </div>
                            <div className="w-full h-[100px] text-[#ffffff] text-[20px]">
                                Puedes ingresar tu gimnasio, cancha o actividad
                                en nuestra app, para ello solo tienes que llenar
                                el formulario y te brindaremos toda la
                                información que necesitas.
                            </div>
                        </div>
                    </div>

                    <div className="w-[40%] h-full flex items-center justify-center ">
                        <form className="bg-white w-[410px] h-[480px] rounded-[15px] flex   flex-col items-center justify-center">
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
