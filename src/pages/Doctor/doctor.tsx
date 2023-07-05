import { motion } from "framer-motion";
import Header from "../../components/Header/header";
import CardScheduleDoctor from "../../components/CardScheduleDoctors/cardScheduleDoctors";
import Footer from "../../components/Footer/footer";

const Doctor = () => {
  return (
    <>
      <Header />
      <motion.div
        id="app__motion--content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5 }}
      >
        <CardScheduleDoctor />
      </motion.div>
      <Footer />
    </>
  );
};

export default Doctor;