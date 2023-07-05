import { AiOutlineSetting } from "react-icons/ai";
import Analise from "../../assets/img/bancodeimagens/analise.jpg";
import Coleta from "../../assets/img/bancodeimagens/coleta.jpg";
import Orientacao from "../../assets/img/bancodeimagens/orientacao.jpg";
import Laudo from "../../assets/img/bancodeimagens/laudo.jpg";
import { ContainerConteudo, ContainerInfo } from "./labInfoStyle";

const LabInfoComponent = () => {
  return (
    <ContainerConteudo>
      <h3>Tecnologia e Inovação</h3>
      <h2>Coleta segura e diferenciada</h2>
      <p>
        Nossos profissionais são instruídos a seguirem protocolos padronizados
        para garantir a segurança e fidelidade dos laudos requisitados pelos
        pacientes.
      </p>

      <div className="containerInforLab">
        <ContainerInfo>
          <img
            src={Orientacao}
            alt="Medico dando orientações para o paciente sobre exame"
          />
          <h3>Orientação</h3>
          <p>
            Damos todas as orientações de pré-coleta como informações sobre o
            tempo de jejum, a realização de exercícios físicos, o consumo de
            bebida alcoólica, entre outras.
          </p>
        </ContainerInfo>

        <ContainerInfo>
          <img src={Coleta} alt="Profissional fazendo coleta de sangue" />
          <h3>Coleta</h3>
          <p>
            Nossos profissionais seguem protocolos específicos e processos
            automatizados para obter as amostras biológicas com segurança.
          </p>
        </ContainerInfo>

        <ContainerInfo>
          <img src={Analise} alt="Profissional analisando amostra " />
          <h3>Análise</h3>
          <p>
            Iniciamos o processo de análise do material biológico com
            equipamentos tecnológicos, monitorando os instrumentos, reagentes e
            estabilidade das amostras.
          </p>
        </ContainerInfo>

        <ContainerInfo>
          <img src={Laudo} alt="Medico conferindo o laudo do exame" />
          <h3>Laudo</h3>
          <p>
            Os responsáveis técnicos conferem e liberam todos os exames de forma
            impressa ou digital, podendo ser acessados de qualquer lugar.
          </p>
        </ContainerInfo>
      </div>

      <div className="containerWarning">
        <span>
          {" "}
          <AiOutlineSetting />
        </span>{" "}
        <h2> Aguarde, em breve agendamento online de exames</h2>
      </div>
    </ContainerConteudo>
  );
};

export default LabInfoComponent;