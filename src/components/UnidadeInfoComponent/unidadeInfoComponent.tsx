import { TbReportMedical } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";
import Medico from "../../assets/img/bancodeimagens/Medicina Geral (15).jpg";
import { ContainerImgUnid, ContainerInfoUnid, UnidadeContainer } from "./unidadeInfoStyle";


const UnidadeInfoComponent = () => {
  return (
    <UnidadeContainer>
      <div className="container">
        <ContainerImgUnid key="1-Container">
          <img src={Medico} alt="Imagem aparelho de ressonancia magnetica" />
        </ContainerImgUnid>
        <ContainerInfoUnid key="2-Container">
          <h2 className="units-title">Conheça nossas unidades</h2>   
          <p> KenzieMed atendimento feito para você! </p>       
          <p>         
          Atendimento com várias especialidaeds, dentro do complexo hospitalar, aliando agilidade que você deseja, as melhores estruturas e os melhores profissionais.
          </p>
          <p>Ambiente seguro, agradável e atendimento <strong>humanizado</strong>. Nossa clínica tem referência em segurança do paciente.</p>

          <h2>
            <MdOutlinePlace /> Unidade Campo Largo
          </h2>
          <h2>
            <MdOutlinePlace /> Unidade Rio Claro
          </h2>       

          <h2 className="units-title">Disponível em todas unidades:</h2>
          <ul>
            <li key="List-1">
              <h3>
                <TbReportMedical />
              </h3>
              Exames Laboratoriais;
            </li>
            <li key="List-2">
              <h3>
                <TbReportMedical />
              </h3>
              Exames de Imagem ;
            </li>
            <li key="List-3">
              <h3>
                <TbReportMedical />
              </h3>
              Exames de Toxicológicos;
            </li>
            <li key="List-4">
              <h3>
                <TbReportMedical />
              </h3>
              Ressonância Magnética;
            </li>
          </ul>
        </ContainerInfoUnid>
      </div>
    </UnidadeContainer>
  );
};

export default UnidadeInfoComponent;