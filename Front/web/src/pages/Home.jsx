import Presentation1 from "../components/Home/Presentation1";
import Presentation2 from "../components/Home/Presentation2";
import Presentation3 from "../components/Home/Presentation3";
import Presentation4 from "../components/Home/Presentation4";
import Presentation5 from "../components/Home/Presentation5";
import FormularioActividad from "../components/VistaCargaDeDatos/VistaFormularioCompleto/FormularioActividad";

const Home = () => {
    return (
        <>
            <FormularioActividad />
            <Presentation1 />
            <Presentation2 />
            <Presentation3 />
            <Presentation4 />
            <Presentation5 />
        </>
    );
};

export default Home;
