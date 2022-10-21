import iconFrame1 from "../../assets/Home/iconFrame1.svg";
import iconFrame2 from "../../assets/Home/iconFrame2.svg";
import iconFrame3 from "../../assets/Home/iconFrame3.svg";
import iconFrame4 from "../../assets/Home/iconFrame4.svg";

const Presentation2 = () => {
    return (
        <div className="w-full min-h-[500px] flex  items-center justify-center pt-10 md:pt-0 pb-6 md:pb-0">
            <div className="w-full h-full md:max-w-[1400px]  flex flex-col md:flex-row justify-center items-center md:items-start">
                <div className="w-full md:w-[25%] p-5 flex  flex-col   mb-4 md:mb-0">
                    <div className="w-full h-[200px] flex justify-center items-center p-2">
                        <img
                            src={iconFrame1}
                            alt=""
                            className="h-full max-h-[160px]"
                        />
                    </div>
                    <div className="w-full text-center">
                        Busca lugares donde quieras hacer una actividad
                    </div>
                </div>
                <div className="w-full md:w-[25%] p-5 flex  flex-col  mb-4 md:mb-0">
                    <div className="w-full h-[200px] flex justify-center items-center p-2">
                        <img
                            src={iconFrame2}
                            alt=""
                            className="h-full max-h-[150px]"
                        />
                    </div>
                    <div className="w-full text-center">
                        Reserva y confirma cuando el grupo esté completo
                    </div>
                </div>
                <div className="w-full md:w-[25%] p-5 flex  flex-col   mb-4 md:mb-0">
                    <div className="w-full h-[200px] flex justify-center items-center p-2">
                        <img
                            src={iconFrame3}
                            alt=""
                            className="h-full max-h-[160px]"
                        />
                    </div>
                    <div className="w-full text-center">
                        Realiza actividades sin problemas
                    </div>
                </div>
                <div className="w-full md:w-[25%] p-5 flex  flex-col   mb-4 md:mb-0">
                    <div className="w-full h-[200px] flex justify-center items-center p-2">
                        <img
                            src={iconFrame4}
                            alt=""
                            className="h-full max-h-[160px]"
                        />
                    </div>
                    <div className="w-full text-center">
                        Conoce gente y disfruta de tus aficiones
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presentation2;
