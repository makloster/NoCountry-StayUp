import React from "react";
import imgJugador from "../../assets/imagesHome/jugador.png";
import stayup2 from "../../assets/imagesHome/stayup2.png";
import Vector from "../../assets/imagesHome/Vector.png";
import basket_dark from "../../assets/iconosCategorias/basket_dark.png";
import beach_dark from "../../assets/iconosCategorias/beach_dark.png";
import danceFloor_dark from "../../assets/iconosCategorias/danceFloor_dark.png";
import fight_dark from "../../assets/iconosCategorias/fight_dark.png";
import futbol_dark from "../../assets/iconosCategorias/futbol_dark.png";
import gym_dark from "../../assets/iconosCategorias/gym_dark.png";
import skate_dark from "../../assets/iconosCategorias/skate_dark.png";
import principalLogoDark from "../../assets/imagesHome/principal_logo_dark.png";
import googleBadgeButton from "../../assets/imagesHome/google-play-badge1.png";

import "./presentation1.css";

const Presentation1 = () => {
    return (
        <>
            <div className='containerHome'>
                <img className='imagenJugador' src={imgJugador} alt='' />

                <div className='contenedor_central_home'>
                    <div className='displayIconosCategorias'>
                        <img
                            className='iconoCategoriaHome'
                            src={basket_dark}
                            alt='basket_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={beach_dark}
                            alt='beach_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={danceFloor_dark}
                            alt='danceFloor_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={fight_dark}
                            alt='fight_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={futbol_dark}
                            alt='futbol_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={gym_dark}
                            alt='gym_dark'
                        />
                        <img
                            className='iconoCategoriaHome'
                            src={skate_dark}
                            alt='skate_dark'
                        />
                    </div>
                    <div>
                        <h1 className='noParesDeMoverte'>
                            ¡No pares de moverte!
                        </h1>
                        <div className='contenedor_subtitulos_home'>
                            <div className='contenedor_subtitulos_Home'>
                                <img
                                    className='logoHome'
                                    src={principalLogoDark}
                                    alt=''
                                />
                                <h2 className='subtitulos_home'>
                                    esta aquí para que no dejes de hacerlo,
                                    encuentra gente para ir a tus lugares
                                    favoritos{" "}
                                </h2>
                            </div>
                        </div>

                        <div className='contenedor_imagenes'>
                            <img
                                className='googleBadgeButton'
                                src={googleBadgeButton}
                                alt=''
                            />
                            <img
                                className='googleBadgeButton'
                                src={googleBadgeButton}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <img className='imagenTelefono' src={stayup2} alt='' />
                <img className='vector' src={Vector} alt='' />
            </div>
        </>
    );
};

export default Presentation1;
