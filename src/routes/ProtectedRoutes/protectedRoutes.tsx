import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading/loading";

const ProtectedRoutes = () => {
  const { loading } = useContext(AuthContext);
  const token = window.localStorage.getItem("@context-KenzieMed:token")

  if (loading) {
    return <Loading />
  }

  return token ? ( <Outlet/> 
  ) : (
  <Navigate to={"/login"} replace />);
}; 

export default ProtectedRoutes;