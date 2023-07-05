import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/Header/header";
import LabInfoComponent from "../../components/LabInfoComponent/labInfoComponent";
import Footer from "../../components/Footer/footer";
import Loading from "../../components/Loading/loading";

const Exames = () => {

  const { isLoading, setIsLoading } = useContext(AuthContext);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Header />
      <LabInfoComponent />
      <Footer />
      {isLoading && <Loading />}
    </>
  );
};

export default Exames;