import React from "react";
import { Link } from "react-router-dom";

const TabsNavegacion = () => {
    return (
        <div>
            {" "}
            <ul
                className='nav nav-tabs flex flex-col  justify-center md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4'
                id='tabs-tabFill'
                role='tablist'>
                <Link to={"./verGrupos"}>
                    <li
                        className='nav-item flex-auto text-center'
                        role='presentation'>
                        <h1
                            className=' nav-link w-full block font-medium text-xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active'
                            id='tabs-home-tabFill'
                            data-bs-toggle='pill'
                            data-bs-target='#tabs-homeFill'
                            role='tab'
                            aria-controls='tabs-homeFill'
                            aria-selected='true'>
                            Actividad
                        </h1>
                    </li>
                </Link>

                <Link to={"./verGrupos"}>
                    <li
                        class='nav-item flex-auto text-center'
                        role='presentation'>
                        <h1 className=' nav-link w-full block font-medium text-xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent'>
                            Ver Grupos
                        </h1>
                    </li>
                </Link>

                <Link to={"./miCuenta"}>
                    <li
                        class='nav-item flex-auto text-center'
                        role='presentation'>
                        <h1
                            className='nav-link w-full block font-medium text-xl leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hovr:borde-transparent hover:bg-gray-100 focus:border-transparent'
                            id='tabs-messages-tabFill'
                            data-bs-toggle='pill'
                            data-bs-target='#tabs-messagesFill'
                            role='tab'
                            aria-controls='tabs-messagesFill'
                            aria-selected='false'>
                            Mi cuenta
                        </h1>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default TabsNavegacion;
