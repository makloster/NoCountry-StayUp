import vector from "../../assets/HomePesentation4/Vectorp4.svg";
import Phonew from "../../assets/HomePesentation4/iPhone_w.svg";
import Phoned from "../../assets/HomePesentation4/iPhone_d.svg";
import icons from "../../assets/HomePesentation4/Iconosp4.svg";
import store from "../../assets/HomePesentation4/store.svg";
import logo from "../../assets/logo_dark.png";
const Presentation4 = () => {
    return (
        <div className="w-full h-[780px] bg-white relative">
            <img
                src={vector}
                alt=""
                className="absolute  right-0 bottom-0 w-[90%]"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <div className="w-[90%] h-full max-w-[1400px]  flex flex-row ">
                    <div className="w-[50%] h-full  flex items-center justify-center">
                        <div className="w-full">
                            <div className="w-full">
                                <img src={icons} alt="" />
                            </div>
                            <div className="w-full">
                                <p className="text-[32px] font-bold">
                                    ¡No esperes más!
                                </p>
                            </div>
                            <div className="w-full h-[80px] flex flex-row items-start  ">
                                <div className="text-[32px] ">
                                    Descarga ya y vive la experiencia
                                </div>
                                <img
                                    src={logo}
                                    alt=""
                                    className="max-w-[120px] mt-3 ml-3"
                                />
                            </div>
                            <div className="w-full flex items-center justify-center ">
                                <img src={store} alt="" className="w-[100%]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full  flex items-center justify-center">
                        <img src={Phoned} alt="" className="mr-2" />
                        <img src={Phonew} alt="" className="ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation4;
