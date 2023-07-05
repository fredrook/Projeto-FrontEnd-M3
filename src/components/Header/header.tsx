import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ButtonAppointment from "../ButtonAppointment/buttonAppointment";
import SearchBar from "../SearchBar/searchBar";
import Menu from "../Menu/menu";
import { TagHeader } from "./headerStyle";
import Medica from "../../assets/img/logo/medica.svg";
import Logo from "../../assets/img/logo/KenzieMED (1).svg";

const Header = () => {
  const { login } = useContext(AuthContext);

  return (
    <TagHeader login={login}>
      <div className="container">
        <Link to="/" ><img src={Logo} alt="Logo KenzieMED" /></Link>
        <div className="container-buttons">
          <Menu />
          <ButtonAppointment />
        </div>
      </div>
      {login ? (
        <SearchBar />
      ) : (
        <div className="container-info">
          <img src={Medica} alt="Medica" />
          <h2>Faça seu agendamento rápido e fácil</h2>
        </div>
      )}
    </TagHeader>
  );
};

export default Header;
