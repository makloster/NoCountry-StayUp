import React from "react";
import sanitarios from "../../../assets/iconosServicios/Bathdroom_dark.png";
import drinks from "../../../assets/iconosServicios/Drinks_dark.png";
import food from "../../../assets/iconosServicios/Food_dark.png";
import hotwater from "../../../assets/iconosServicios/Hotwater_dark.png";
import market from "../../../assets/iconosServicios/Market_dark.png";
import parking from "../../../assets/iconosServicios/Parking_dark.png";
import shower from "../../../assets/iconosServicios/Shower_dark.png";
import water from "../../../assets/iconosServicios/Water_dark.png";
import wifi from "../../../assets/iconosServicios/Wifi_dark.png";

const Servicios = () => {
    return (
        <div>
            <h1 className='bg-white h-[60px] rounded-[15px] flex   flex-row items-center justify-center'>
                Servicios
            </h1>
            <div>
                <div class='flex justify-center'>
                    <div className='bg-white h-[120px] rounded-[15px] flex   flex-row items-center justify-center'>
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='exampleCheck1'
                                id='exampleCheck1'
                            />
                            <img src={sanitarios} alt='' />
                            <h1>Baños</h1>
                        </div>
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={drinks} alt='' />
                            <h1>Venta de bebidas</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={food} alt='' />
                            <h1>Ofrece Alimentos</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600  ml-2 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={hotwater} alt='' />
                            <h1>Agua Caliente</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={market} alt='' />
                            <h1>Tienda</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={parking} alt='' />
                            <h1>Estacionamiento</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={shower} alt='' />
                            <h1>Duchas/Vestuario</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={water} alt='' />
                            <h1>Hidratación disponible</h1>
                        </div>{" "}
                        <div class='form-check'>
                            <input
                                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ml-2 cursor-pointer'
                                type='checkbox'
                                name='flexRadioDefault'
                                id='flexRadioDefault1'
                            />
                            <img src={wifi} alt='' />
                            <h1>Wifi gratuito</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicios;
