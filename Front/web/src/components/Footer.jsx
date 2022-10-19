import FooterLg from "./Footer/FooterLg";
import FooterSm from "./Footer/FooterSm";
import getDevice from "../helpers/getDevice";

const Footer = () => {
    const { deviceWidth } = getDevice(document.getElementById("root"));
    return deviceWidth < 640 ? <FooterSm /> : <FooterLg />;
};

export default Footer;
