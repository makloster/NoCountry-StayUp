import imgLogo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="w-full h-[90px] bg-[#181818]  flex items-center justify-center">
            <div className="w-[80%] max-w-[1400px] h-full  flex items-center justify-between">
                <img src={imgLogo} alt="" />
                <button className=" hidden md:flex w-[250px] h-[50px] bg-[#F6163C] text-white  rounded-[15px]  items-center justify-center">
                    Ingresar Organizador
                </button>
            </div>
        </div>
    );
};

export default Navbar;
