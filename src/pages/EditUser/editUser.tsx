import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsArrowLeftShort } from "react-icons/bs";
import Header from "../../components/Header/header";
import FormEditUser from "../../components/FormEditUSer/formEditUser";
import InfoUserDoc from "../../components/ModalInfoUserDoc/infoUserDoc";
import Footer from "../../components/Footer/footer";
import { Container } from "./editUserSytle";
import { TagDivUser, DivModalPerfil } from "../Dashboard/dashboardStyle";

const EditUser = () => {
  const { isOpenModal, setIsOpenModal, user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div onClick={() => setIsOpenModal(false)} style={{ width: "100%" }}>
      <Header />
      <motion.div
        id="app__motion--content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <TagDivUser
           className="aqui"
           onClick={(event) => event.stopPropagation()}
          >
            <button type="button" onClick={() => setIsOpenModal(!isOpenModal)}>
              {user.img ? (
                <img src={user.img} alt="Avatar Usuário" />
              ) : (
                <RiAccountCircleLine className="Icon" />
              )}
              Perfil
            </button>
            <div>
              <p>Olá,</p>
              <span>{user.name}</span>
            </div>
          </TagDivUser>
          {isOpenModal && (
            <DivModalPerfil>
              <InfoUserDoc />
            </DivModalPerfil>
          )}
          <div className="divBtnReturn">
            <button
              type="button"
              onClick={() => navigate("/dashboard", { replace: true })}
            >
              <BsArrowLeftShort /> Voltar
            </button>
          </div>
          <FormEditUser />
        </Container>
      </motion.div>
      <Footer />
    </div>
  );
};

export default EditUser;