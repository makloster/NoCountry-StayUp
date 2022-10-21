import React from "react";
import ButtonPublicar from "../ComponentesFormulario/ButtonPublicar";
import ImageBigGallery from "../ComponentesFormulario/GaleriaImagenes/ImageBigGallery";
import ImageGallery from "../ComponentesFormulario/GaleriaImagenes/ImageGallery";
import Inputs from "../ComponentesFormulario/Inputs";
import Precio from "../ComponentesFormulario/Precio";
import Servicios from "../ComponentesFormulario/Servicios";
import TabsNavegacion from "../ComponentesFormulario/TabsNavegacion";
import Ubicacion from "../ComponentesFormulario/Ubicacion";
import ButtonUploadImage from "../ComponentesFormulario/ButtonUploadImage";

const FormularioActividad = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='block p-6 rounded-lg shadow-lg bg-white h-auto max-w-full'>
                    <TabsNavegacion />
                    <ImageBigGallery />
                    <ButtonUploadImage />
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
