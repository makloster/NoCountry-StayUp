import vectorHomeP1lg from "../../assets/Vectors/vectorHomeP1lg.svg";
import vectorHomeP1sm from "../../assets/Vectors/vectorHomeP1sm.svg";
import IconosHome from "../../assets/Home/IconosHome.svg";
import LogoDark from "../../assets/General/LogoDark.svg";
import playStore from "../../assets/General/playStore.svg";
import appStore from "../../assets/General/appStore.svg";
import Celular from "../../assets/Home/Celular.svg";
import Jugador from "../../assets/Home/Jugador.svg";

const Presentation1 = () => {
    return (
        <div className="w-full h-[1060px] md:h-[860px] relative bg-gradient-to-b  from-[#CDCACA] to-[#ffffff] ">
            <img
                src={vectorHomeP1sm}
                alt=""
                className="absolute left-0 top-[40%] md:hidden"
            />
            <img
                src={vectorHomeP1lg}
                alt=""
                className="absolute left-0 top-[64%]  hidden md:block"
            />
            <div className="w-full h-full absolute top-0 left-0 flex flex-col md:flex-row md:items-center md:justify-center">
                <div className="w-full md:max-w-[1400px]   flex flex-col md:flex-row md:items-center">
                    <div className="hidden md:block md:w-[25%] ">
                        <img src={Jugador} alt="" />
                    </div>
                    <div className="w-full md:w-[50%] pl-5 pr-5 md:pl-0 md:pr-0 ">
                        <img
                            src={IconosHome}
                            alt=""
                            className="w-full max-w-[400px] mb-5 mt-10 md:mt-5 md:mb-2"
                        />
                        <div className="text-[30px] font-bold mb-5 md:mb-2">
                            ¡No pares de moverte!
                        </div>
                        <div className="text-[20px]  md:text-[32px] md:max-w-[700px]">
                            <img
                                src={LogoDark}
                                alt=""
                                className="w-[100px] inline"
                            />
                            está aquí para que no dejes de hacerlo, encuentra
                            gente para ir a tus lugares favoritos.
                            <div className="w-full mt-2 hidden md:flex flex-row items-center justify-center">
                                <img
                                    src={playStore}
                                    alt=""
                                    className="max-w-[200px] mr-10"
                                />
                                <img
                                    src={appStore}
                                    alt=""
                                    className="max-w-[200px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[25%] ">
                        <img src={Celular} alt="" />
                    </div>
                    <div className="w-full md:hidden ">
                        <div className="w-full mt-2 flex flex-col items-center justify-center">
                            <img
                                src={playStore}
                                alt=""
                                className="max-w-[200px] mb-10"
                            />
                            <img
                                src={appStore}
                                alt=""
                                className="max-w-[200px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation1;
