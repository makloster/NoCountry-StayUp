import React from "react";
import welcome1 from "../../assets/imagesHomePresentacion2/Welcome/welcome1_dark.png";
import welcome2 from "../../assets/imagesHomePresentacion2/Welcome/welcome2_dark.png";
import welcome3 from "../../assets/imagesHomePresentacion2/Welcome/welcome3_dark.png";
import welcome4 from "../../assets/imagesHomePresentacion2/Welcome/welcome4_dark.png";
import "./presentation2.css";

const Presentation2 = () => {
    return (
        <>
            <div>
                <h1 className='titulo_presentacion_2'>¿Cómo funciona?</h1>
            </div>
            <div
                className='imagenes_presentation_2
        '>
                <div className='imagen_con_texto'>
                    <img
                        className='imagen_presentacion_1'
                        src={welcome1}
                        alt='welcome1'
                    />
                    <h1 className="titulo_imagen_presentacion_2" >Busca lugares donde quieras hacer una actividad</h1>
                </div>
                <div className='imagen_con_texto'>
                    <img
                        className='imagen_presentacion_2'
                        src={welcome2}
                        alt='welcome2'
                    />
                    <h1 className="titulo_imagen_presentacion_2">Reserva y confirma cuando el grupo esté completo</h1>

                </div>

                <div className='imagen_con_texto'>
                    <img
                        className='imagen_presentacion_3'
                        src={welcome3}
                        alt='welcome3'
                    />
                    <h1 className="titulo_imagen_presentacion_3">Realiza actividades sin problemas</h1>

                </div>

                <div className='imagen_con_texto'>
                    <img
                        className='imagen_presentacion_4'
                        src={welcome4}
                        alt='welcome4'
                    />
                    <h1 className="titulo_imagen_presentacion_2">Conoce gente y disfruta de tus aficiones</h1>

                </div>
            </div>
        </>
    );
};

export default Presentation2;
