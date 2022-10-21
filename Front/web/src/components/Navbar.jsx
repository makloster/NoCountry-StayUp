import imgLogo from "../assets/General/LogoWhite.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='w-full h-[90px] bg-[#181818]  flex items-center justify-center'>
            <div className='w-[80%] max-w-[1400px] h-full absolute flex items-center justify-between'>
                <Link class="w-16 md:w-32 lg:w-48 " to={"/"}>
                    <img src={imgLogo} alt='hola' />
                </Link>
                <Link to={"./formularioOrganizador"}>
                    <button className='w-[250px] h-[50px] bg-[#F6163C] text-white  rounded-[15px] flex items-center justify-center'>
                        Ingresar Organizador
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
