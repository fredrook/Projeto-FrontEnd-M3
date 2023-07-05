import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { IUser } from "../../interface/IUser";
import Header from "../../components/Header/header";
import Carousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import { ContainerRegister } from "./registerStyle";

const Register = () => {
  const navigate = useNavigate();
  const { onSubmitRegister } = useContext(AuthContext);
  const [isModal, setIsModal] = useState(true);
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Nome obrigatório")
      .min(10, "Nome Invalido"),
    email: yup
      .string()
      .trim()
      .required("Email obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .trim()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial($*&@#)"
      )
      .min(8, "Min 8 caracteres!"),
    confirmPassword: yup
      .string()
      .trim()
      .required("Consfirme sua senha!")
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup
      .string()
      .trim()
      .required("CPF é obrigatório")
      .min(11, "CPF Invalido"),
    age: yup.string().trim().required("Idade é obrigatório"),
    sex: yup.string().trim().required("Gênero é obrigatório"),
    address: yup.string().trim().required("Endereço é obrigatório"),
    contact: yup.string().trim().required("Contato é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const GoToLogin = async () => {
    setIsModal(false);
    setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 200);
  }

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
      <AnimatePresence>
        {isModal && (
          <motion.div
            id="app__motion--modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5 }}
          >
            <ContainerRegister>
              <div className="register">
                <div className="divHeader">
                  <button onClick={GoToLogin} className="btnReturn">
                    X
                  </button>
                </div>
                <span className="spanRegister">Cadastro</span>
                <form
                  className="form"
                  onSubmit={handleSubmit(onSubmitRegister)}
                >
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="inputRegister"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                  />
                  {errors?.name && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.name.message}
                    </p>
                  )}
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="inputRegister"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.email.message}
                    </p>
                  )}
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    className="inputRegister"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                  />
                  {errors?.password && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.password.message}
                    </p>
                  )}
                  <label htmlFor="confirmPassword">Confirmar Senha</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="inputRegister"
                    placeholder="Digite novamente sua senha"
                    {...register("confirmPassword")}
                  />
                  {errors?.confirmPassword && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  <label htmlFor="CPF">CPF</label>
                  <input
                    type="text"
                    id="CPF"
                    className="inputRegister"
                    placeholder="Digite seu CPF"
                    {...register("CPF")}
                  />
                  {errors?.CPF && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.CPF.message}
                    </p>
                  )}
                  <label htmlFor="age">Idade</label>
                  <input
                    type="text"
                    id="age"
                    className="inputRegister"
                    placeholder="Qual sua Idade?"
                    {...register("age")}
                  />
                  {errors?.age && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.age.message}
                    </p>
                  )}
                  <label htmlFor="sex">Gênero</label>
                  <select
                    className="inputRegister"
                    id="sex"
                    defaultValue={"M"}
                    {...register("sex")}
                  >
                    <option value="" disabled>
                      Gênero
                    </option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                  {errors?.sex && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.sex.message}
                    </p>
                  )}
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    className="inputRegister"
                    placeholder="Digite seu endereço"
                    {...register("address")}
                  />
                  {errors?.address && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.message}
                    </p>
                  )}
                  <label htmlFor="contact">Contato</label>
                  <input
                    type="text"
                    id="contact"
                    className="inputRegister"
                    placeholder="Opção de contato"
                    {...register("contact")}
                  />
                  {errors?.contact && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.contact.message}
                    </p>
                  )}
                  <button className="btnRegister" type="submit">
                    Cadastrar
                  </button>
                </form>
              </div>
            </ContainerRegister>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Register;