import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/header";
import UnidadeInfoComponent from "../../components/UnidadeInfoComponent/unidadeInfoComponent";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <AnimatePresence>
        <UnidadeInfoComponent />
        <motion.div key="animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
        >
          <Carousel />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Home;