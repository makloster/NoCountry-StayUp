import LogoWhite from "../assets/General/LogoWhite.svg";
import SocialNetworks from "../assets/General/SocialNetworks.svg";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-[#181818] w-full  h-[200px] hidden md:flex items-center justify-center ">
                <div className="w-[660px] h-[200px] flex  flex-row ">
                    <div className="w-[200px] h-[200px] text-white pt-6 flex flex-col">
                        <div className="text-[18px] mb-2 font-medium">
                            Institucional
                        </div>
                        <div>Nuestra App</div>
                        <div>¿Cómo funciona?</div>
                        <div>Aviso legal y privacidad</div>
                    </div>
                    <div className="w-[200px] h-[200px] text-white pt-6 flex flex-col">
                        <div className="text-[18px] mb-2 font-medium">
                            Organizador
                        </div>
                        <div>Ingresa tu actividad</div>
                        <div>Más información</div>
                    </div>
                    <div className="w-[260px] h-[200px] text-white pt-6 flex flex-col">
                        <button className="w-full h-[50px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center ">
                            Contacto
                        </button>
                        <div className="w-full h-[50px] text-white flex items-center justify-center">
                            <div className="mr-3">Siguenos en </div>
                            <img src={SocialNetworks} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] w-full  h-[80px] hidden md:flex items-center justify-center">
                <div className="h-[80px] flex items-center justify-center text-white">
                    <img src={LogoWhite} alt="" className="w-[125px]" />
                    <FaRegCopyright className="mr-3 ml-3" />
                    <div>Derechos reservados 2022</div>
                </div>
            </div>

            <div className="w-full pt-5 pb-5 bg-[#181818] md:hidden">
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
                            Derechos reservados 2022
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
