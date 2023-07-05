import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "./buttonStyle";

const ButtonAppointment = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const appointment = () => {
    {login ? navigate("/dashboard", { replace: true }) : navigate("/login", { replace: true })}
  }
  return <Button onClick={appointment} login={login}>{login ? "Meus Agendamentos" : "Login  /  Cadastro"}</Button>;
};

export default ButtonAppointment;