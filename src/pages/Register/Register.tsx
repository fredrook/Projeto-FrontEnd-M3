import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { IUser, IAddress } from "../../interface/IUser";
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
      .min(10, "Nome inválido"),
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
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*+&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial ($*+&@#)"
      )
      .min(8, "Mínimo de 8 caracteres"),
    confirmPassword: yup
      .string()
      .trim()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup
      .string()
      .trim()
      .required("CPF é obrigatório")
      .min(11, "CPF inválido"),
    age: yup
      .number()
      .required("Idade é obrigatória")
      .integer("A idade deve ser um número inteiro"),
    sex: yup.string().trim().required("Gênero é obrigatório"),
    address: yup.object().shape({
      district: yup.string().trim().required("Bairro é obrigatório"),
      zipCode: yup.string().trim().required("CEP é obrigatório"),
      number: yup.string().trim().required("Número é obrigatório"),
      city: yup.string().trim().required("Cidade é obrigatória"),
      state: yup.string().trim().required("Estado é obrigatório"),
    }),
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
  };

  const handleFormSubmit = (data: IUser) => {
    delete data.confirmPassword;
    data.isAdmin = true;

    const { address, ...rest } = data;
    const user: IUser = {
      ...rest,
      address: { ...address } as IAddress,
    };
    onSubmitRegister(user);
  };

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
                  onSubmit={handleSubmit(handleFormSubmit)}
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
                    type="number"
                    id="age"
                    className="inputRegister"
                    placeholder="Qual sua idade?"
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
                    defaultValue={"Masculino"}
                    {...register("sex")}
                  >
                    <option value="" disabled>
                      Gênero
                    </option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  {errors?.sex && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.sex.message}
                    </p>
                  )}
                  <label htmlFor="address.state">Estado</label>
                  <input
                    type="text"
                    id="state"
                    className="inputRegister"
                    placeholder="Digite o estado"
                    {...register("address.state")}
                  />
                  {errors?.address?.state && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.state.message}
                    </p>
                  )}
                  <label htmlFor="address.zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    className="inputRegister"
                    placeholder="Digite o CEP"
                    {...register("address.zipCode")}
                  />
                  {errors?.address?.zipCode && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.zipCode.message}
                    </p>
                  )}
                  <label htmlFor="address.city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    className="inputRegister"
                    placeholder="Digite a cidade"
                    {...register("address.city")}
                  />
                  {errors?.address?.city && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.city.message}
                    </p>
                  )}
                  <label htmlFor="address.district">Bairro</label>
                  <input
                    type="text"
                    id="district"
                    className="inputRegister"
                    placeholder="Digite o bairro"
                    {...register("address.district")}
                  />
                  {errors?.address?.district && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.district.message}
                    </p>
                  )}
                  <label htmlFor="address.number">Número</label>
                  <input
                    type="text"
                    id="number"
                    className="inputRegister"
                    placeholder="Digite o número"
                    {...register("address.number")}
                  />
                  {errors?.address?.number && (
                    <p className="errorRegister">
                      <FiAlertCircle />
                      {errors.address.number.message}
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
