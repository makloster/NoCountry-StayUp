import iconPlace from "../../assets/Home/iconPlace.svg";
import iconSmile from "../../assets/Home/iconSmile.svg";
import iconPeople from "../../assets/Home/iconPeople.svg";
const Presentation3 = () => {
    return (
        <div className="w-full h-[800px] md:h-[600px]  bg-gradient-to-b  from-[#CDCACA] to-[#ffffff] flex justify-center items-center">
            <div className="w-full h-full md:max-w-[1400px]  flex flex-col md:flex-row  justify-center items-center ">
                <div className="w-[80%] h-[360px] md:[40%] md:max-w-[460px] md:mr-[10%]  mb-3 md:mb-0 flex flex-col">
                    <div className="text-[#F6163C] text-[32px] font-bold w-full flex justify-center mb-3">
                        Como usuario
                    </div>
                    <div className="bg-[#2B2928] rounded-[40px] w-full h-[300px] flex flex-col justify-around items-center pt-2 pb-2 text-white">
                        <div className=" w-full flex flex-row justify-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconPlace}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Reserva lugares
                            </div>
                        </div>
                        <div className=" w-full flex flex-row justify-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconPeople}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Conoce gente
                            </div>
                        </div>
                        <div className=" w-full flex flex-row justify-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconSmile}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Sin preocupaciones
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-[360px] md:[40%] md:max-w-[460px]    flex flex-col">
                    <div className="text-[#F6163C] text-[32px] font-bold w-full flex justify-center mb-3">
                        Como organizador
                    </div>
                    <div className="bg-[#2B2928] rounded-[40px] w-full h-[300px] flex flex-col justify-around items-center pt-2 pb-2 text-white">
                        <div className=" w-full flex flex-row justify-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconPlace}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Pública tu actividad
                            </div>
                        </div>
                        <div className=" w-full flex flex-row justify-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconPeople}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Acepta reservas
                            </div>
                        </div>
                        <div className=" w-full flex flex-row justify-center items-center">
                            <div className="w-[46px] h-[46px] mr-3">
                                <img
                                    src={iconSmile}
                                    alt=""
                                    className="max-h-[40px]"
                                />
                            </div>
                            <div className="h-[40px] flex items-center">
                                Gana dinero sin problemas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation3;
