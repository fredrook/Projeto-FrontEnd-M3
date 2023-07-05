import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/header";
import CardDoctors from "../../components/CardDoctors/cardDoctors";
import Footer from "../../components/Footer/footer";
import Loading from "../../components/Loading/loading";

const CorpoClinico = () => {
  const { itemFilter, doctorsList, isLoading } = useContext(AuthContext);
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          id="app__motion--content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
        >
          {itemFilter.length > 0 ? (
            <CardDoctors doctorsList={itemFilter} />
          ) : (
            <CardDoctors doctorsList={doctorsList} />
          )}
        </motion.div>
      </AnimatePresence>
      <Footer />
      {isLoading && <Loading />}
    </>
  );
};

export default CorpoClinico;