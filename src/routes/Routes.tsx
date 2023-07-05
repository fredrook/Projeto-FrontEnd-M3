import { AnimatePresence } from "framer-motion";
import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/Home/home";
import Exames from "../pages/Exames/exames";
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";
import CorpoClinico from "../pages/CorpoClinico/corpoClinico";
import ProtectedRoutes from "./ProtectedRoutes/protectedRoutes";
import Dashboard from "../pages/Dashboard/dashboard";
import EditUser from "../pages/EditUser/editUser";
import Doctor from "../pages/Doctor/doctor";

const AllRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/corpoclinico" element={<CorpoClinico />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/edit" element={<EditUser />} />
          <Route path="/corpoclinico/doctor:id" element={<Doctor />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;