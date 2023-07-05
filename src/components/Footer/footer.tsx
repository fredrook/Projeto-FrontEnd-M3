import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { ContainerFooter } from "./footerStyle";

const Footer = () => {
  return (
    <ContainerFooter>
      <div className="containerGeral">
        <div className="institutional">
          <h5>Institucional</h5>
          <h6>Sobre</h6>
          <h6>Trabalhe Conosco</h6>
          <h6>Parceiros</h6>
        </div>

        <div className="atendimento">
          <div className="containerPhone">
            <h5>Atendimento ao Cliente</h5>
            <h6>
              <AiFillPhone /> 11 9 2245678
            </h6>
            <h6>
              <AiOutlineMail /> contato@kenziemed.com
            </h6>
          </div>
          <div className="containerDays">
            <p>Segunda a sexta, das 07:00 às 19:40 </p>
            <p>Sábado, das 07:00 às 13:20</p>
          </div>
        </div>

        <div className="network">
          <h5>Siga nossas redes sociais</h5>
          <h6>
            <FiInstagram /> @kenzieMed
          </h6>
          <h6>
            <ImFacebook2 /> @kenzieMed
          </h6>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;