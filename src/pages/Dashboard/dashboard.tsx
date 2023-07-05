import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { RiAccountCircleLine } from "react-icons/ri";
import Header from "../../components/Header/header";
import InfoUserDoc from "../../components/ModalInfoUserDoc/infoUserDoc";
import CardAppointment from "../../components/CardAppointment/cardAppointment";
import Footer from "../../components/Footer/footer";
import Loading from "../../components/Loading/loading";
import { TagDivUser, DivModalPerfil, Container } from "./dashboardStyle";

const Dashboard = () => {
  const { isOpenModal, setIsOpenModal, user, isLoading } =
    useContext(AuthContext);

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
          <CardAppointment />
        </Container>
      </motion.div>
      <Footer />
      {isLoading && <Loading />}
    </div>
  );
};

export default Dashboard;