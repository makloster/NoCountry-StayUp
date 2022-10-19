import SocialNetworks from "../../assets/General/SocialNetworks.svg";
import { FaRegCopyright } from "react-icons/fa";

const FooterSm = () => {
    return (
        <div className="w-full pt-5 pb-5 bg-[#181818]">
            <div className="w-full flex flex-col items-center text-white ">
                <div>
                    <button className="w-[250px] h-[50px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center mt-2 mb-2 font-semibold">
                        Contacto Organizadores
                    </button>
                </div>
                <div className="flex flex-row">
                    <div className="mr-3 font-semibold">Siguenos en </div>
                    <img src={SocialNetworks} alt="" />
                </div>
                <div className="h-[30px] flex flex-row items-center ">
                    <FaRegCopyright className="mr-2" />
                    <div className="font-semibold">
                        Derechos reservados 2022{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSm;
