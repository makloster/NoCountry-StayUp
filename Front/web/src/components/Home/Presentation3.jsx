import React from "react";
import "./presentation3.css";
import face_light from "../../assets/imagesHomePresentacion3/Face_light_filled.png";
import People_light from "../../assets/imagesHomePresentacion3/People_light_filled.png";
import Place_light from "../../assets/imagesHomePresentacion3/Place_light_filled.png";

const Presentation3 = () => {
    return (
        <>
            <div className='contenedor_presentacion_3'>
                <div>
                    <h1 className="titulo_card_presentacion_3">Como usuario</h1>
                    <div className='cards'>
                        <div className='icon_con_texto'>
                            <img src={face_light} alt='face_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                        <div className='icon_con_texto'>
                            <img src={People_light} alt='People_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                        <div className='icon_con_texto'>
                            <img src={Place_light} alt='Place_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="titulo_card_presentacion_3">Como organizador</h1>
                    <div className='cards'>
                        <div className='icon_con_texto'>
                            <img src={face_light} alt='face_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                        <div className='icon_con_texto'>
                            <img src={People_light} alt='People_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                        <div className='icon_con_texto'>
                            <img src={Place_light} alt='Place_light' />
                            <h1 className='texto_en_card'>Hola</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Presentation3;
