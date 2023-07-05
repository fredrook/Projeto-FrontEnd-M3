import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineSearch } from "react-icons/ai";
import { ContainerSearch } from "./searchBarStyle";

const SearchBar = () => {
  const { inputFilter, setInputFilter, filterDoctors } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const Search = () => {
    navigate("/corpoclinico");
    filterDoctors(inputFilter);
    setInputFilter("");
  }

  return (
    <ContainerSearch>
      <div className="containerGeral">
        <div className="containerText">
          <h3>Procurar Especialidade</h3>
        </div>
        <div className="containerINput">
          <input
            type="text"
            placeholder="Procurar médico por especialidade"
            value={inputFilter}
            onChange={(event) => setInputFilter(event.target.value)}
            required
          />
          <button onClick={Search}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </ContainerSearch>
  );
};

export default SearchBar;