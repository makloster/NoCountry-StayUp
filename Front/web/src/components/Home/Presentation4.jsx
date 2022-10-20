import IconosHome from "../../assets/Home/IconosHome.svg";
import LogoDark from "../../assets/General/LogoDark.svg";
import iPhone_d from "../../assets/Home/iPhone_d.svg";
import iPhone_w from "../../assets/Home/iPhone_w.svg";
import playStore from "../../assets/General/playStore.svg";
import appStore from "../../assets/General/appStore.svg";
import vectorHomeP4sm from "../../assets/Vectors/vectorHomeP4sm.svg";
import vectorHomeP4lg from "../../assets/Vectors/vectorHomeP4lg.svg";
const Presentation4 = () => {
    return (
        <div className="w-full h-[640px] relative">
            <img
                src={vectorHomeP4sm}
                alt=""
                className="absolute bottom-4 right-0 md:hidden"
            />
            <img
                src={vectorHomeP4lg}
                alt=""
                className="absolute bottom-0 right-0  hidden md:block"
            />
            <div className="w-full h-full absolute flex items-center justify-center">
                <div className="w-full h-full  md:max-w-[1400px] p-4 md:pl-0 md:pr-0  md:flex md:flex-row">
                    <div className="w-full md:w-[50%] md:flex md:items-center">
                        <div className="w-full flex flex-col">
                            <img
                                src={IconosHome}
                                alt=""
                                className="w-[100%] max-w-[400px]"
                            />
                            <div className="font-bold text-[32px]">
                                ¡No esperes más!
                            </div>
                            <div className="w-full flex flex-row items-center h-[30px] md:pt-2">
                                <div>Descarga ya y vive la experiencia </div>
                                <img
                                    src={LogoDark}
                                    alt=""
                                    className="w-[60px] ml-3"
                                />
                            </div>
                            <div className="w-full hidden md:flex md:flex-row md:pt-6 md:justify-center">
                                <img
                                    src={playStore}
                                    alt=""
                                    className="w-[40%] max-w-[250px] mr-3"
                                />
                                <img
                                    src={appStore}
                                    alt=""
                                    className="w-[40%] max-w-[250px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] pt-3 pb-3   flex  justify-center items-center">
                        <div className=" w-full flex flex-row justify-center items-center">
                            <img
                                src={iPhone_d}
                                alt=""
                                className="w-[40%] mr-2 md:max-w-[250px]"
                            />
                            <img
                                src={iPhone_w}
                                alt=""
                                className="w-[40%] md:max-w-[250px]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:hidden">
                        <div className="w-full pt-2 pb-2 flex flex-col items-center ">
                            <img
                                src={playStore}
                                alt=""
                                className="w-[250px] mb-4"
                            />
                            <img src={appStore} alt="" className="w-[250px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation4;
