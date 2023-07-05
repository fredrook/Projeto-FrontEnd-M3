import { useNavigate } from "react-router-dom";
import { ContainerMenu } from "./menuStyle";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <ContainerMenu>
      <button onClick={() => navigate("/", { replace: true })}>Início</button>
      <button onClick={() => navigate("/corpoclinico", { replace: true })}>Corpo Clínico</button>
      <button onClick={() => navigate("/exames", { replace: true })}>Exames</button>
    </ContainerMenu>
  );
};

export default Menu;