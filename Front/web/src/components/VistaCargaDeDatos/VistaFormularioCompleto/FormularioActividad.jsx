import React from "react";
import ButtonPublicar from "../ComponentesFormulario/ButtonPublicar";
import ImageBigGallery from "../ComponentesFormulario/GaleriaImagenes/ImageBigGallery";
import ImageGallery from "../ComponentesFormulario/GaleriaImagenes/ImageGallery";
import Inputs from "../ComponentesFormulario/Inputs";
import Precio from "../ComponentesFormulario/Precio";
import Servicios from "../ComponentesFormulario/Servicios";
import TabsNavegacion from "../ComponentesFormulario/TabsNavegacion";
import Ubicacion from "../ComponentesFormulario/Ubicacion";

const FormularioActividad = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='block p-6 rounded-lg shadow-lg bg-white max-w-m'>
                    <TabsNavegacion />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "50px",
                        }}>
                        <ImageBigGallery />
                        <ImageGallery />
                    </div>
                    <Inputs />
                    <Servicios />
                    <Ubicacion />
                    <Precio />
                    <ButtonPublicar />
                </div>
            </div>
        </>
    );
};

export default FormularioActividad;
