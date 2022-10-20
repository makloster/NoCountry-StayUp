import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActividadPublicada from "../components/VistaActividadPublicada/ActividadPublicada";
import VerGrupos from "../components/VistaVerGrupos/VerGrupos";
import MiCuenta from "../components/VistaMiCuenta/MiCuenta";
import { VistaContrasenaCambiada } from "../components/VistaContrasenaCambiada/VistaContrasenaCambiada";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/verGrupos' element={<VerGrupos />} />
                <Route exact path='/miCuenta' element={<MiCuenta />} />
                <Route
                    exact
                    path='/miCuenta/contrasenaCambiada'
                    element={<VistaContrasenaCambiada />}
                />

                <Route
                    path='/actividadPublicada'
                    element={<ActividadPublicada />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
