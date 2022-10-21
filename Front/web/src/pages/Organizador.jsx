import vectorOrganizador1 from "../assets/Vectors/vectorOrganizador1.svg";
import vectorOrganizador2 from "../assets/Vectors/vectorOrganizador2.svg";
import Container from "../components/Container";
import Inputs from "../components/VistaCargaDeDatos/ComponentesFormulario/Inputs";
import TabsNavegacion from "../components/VistaCargaDeDatos/ComponentesFormulario/TabsNavegacion";

const Organizador = () => {
    return (
        <div className="w-full min-h-[calc(100vh-250px)]  md:min-h-[calc(100vh-370px)]  relative">
            <img src={vectorOrganizador1} alt="" className="absolute" />
            <img src={vectorOrganizador2} alt="" className="absolute" />
            <Container>
                <TabsNavegacion active={1} />
                <Inputs />
            </Container>
        </div>
    );
};

export default Organizador;
