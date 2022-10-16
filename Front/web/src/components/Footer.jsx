import imgLogo from "../assets/logo.png";
import {
    FaRegCopyright,
    FaInstagram,
    FaFacebookSquare,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='bg-[#181818] w-full  h-[200px] flex items-center justify-center'>
                <div className='w-[660px] h-[200px] flex  flex-row '>
                    <div className='w-[200px] h-[200px] text-white pt-6 flex flex-col'>
                        <div className='text-[18px] mb-2 font-medium'>
                            Institucional
                        </div>
                        <div>Nuestra App</div>
                        <div>¿Cómo funciona?</div>
                        <div>Aviso legal y privacidad</div>
                    </div>
                    <div className='w-[200px] h-[200px] text-white pt-6 flex flex-col'>
                        <div className='text-[18px] mb-2 font-medium'>
                            Organizador
                        </div>
                        <div>Ingresa tu actividad</div>
                        <div>Más información</div>
                    </div>
                    <div className='w-[260px] h-[200px] text-white pt-6 flex flex-col'>
                        <button className='w-full h-[50px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center '>
                            Contacto
                        </button>
                        <div className='w-full h-[50px] text-white flex items-center justify-center'>
                            <div>Siguenos en </div>
                            <FaInstagram className='ml-2 cursor-pointer text-pink-400' />
                            <FaFacebookSquare className='ml-2 cursor-pointer text-blue-500' />
                            <FaTwitterSquare className='ml-2 cursor-pointer text-sky-400' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#000000] w-full  h-[80px] flex items-center justify-center'>
                <div className='h-[80px] flex items-center justify-center text-white'>
                    <img src={imgLogo} alt='' className='w-[125px] mr-2' />
                    <FaRegCopyright className=' mr-2' />
                    <div>Derechos reservados 2022</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
