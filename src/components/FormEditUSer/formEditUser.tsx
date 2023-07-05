import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { IEditProfile } from "../../interface/IEditProfile";
import { FiAlertCircle } from "react-icons/fi";
import { EditUserDiv } from "./formEditUserStyle";

const FormEditUser = () => {
  const { EditUserProfile, user } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().trim(),
    email: yup
      .string()
      .trim()
      .email("Email inválido!"),
    password: yup
      .string()
      .trim()
      .required("Senha é obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial($*&@#)"
      ),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Senha não confere"),
    CPF: yup.string().trim(),
    age: yup.string().trim(),
    sex: yup.string().trim(),
    address: yup.string().trim(),
    contact: yup.string().trim(),
    img: yup.string().trim(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditProfile>({
    resolver: yupResolver(formSchema),
  });

  return (
    <EditUserDiv>
      <span className="spanRegister">Editar Perfil</span>
      <form className="form" onSubmit={handleSubmit(EditUserProfile)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          className="inputRegister"
          defaultValue={`${user.name}`}
          {...register("name")}
        />
        {errors?.name && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.name.message}
          </span>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="inputRegister"
          defaultValue={`${user.email}`}
          {...register("email")}
        />
        {errors?.email && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.email.message}
          </span>
        )}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          className="inputRegister"
          placeholder="Digite aqui sua nova senha"
          {...register("password")}
        />
        {errors?.password && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.password.message}
          </span>
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
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.confirmPassword.message}
          </span>
        )}
        <label htmlFor="CPF">CPF</label>
        <input
          type="text"
          id="CPF"
          className="inputRegister"
          defaultValue={`${user.CPF}`}
          {...register("CPF")}
        />
        {errors?.CPF && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.CPF.message}
          </span>
        )}
        <label htmlFor="age">Idade</label>
        <input
          type="text"
          id="age"
          className="inputRegister"
          defaultValue={`${user.age}`}
          {...register("age")}
        />
        {errors?.age && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.age.message}
          </span>
        )}
        <label htmlFor="sex">Sexo</label>
        <select
          className="inputRegister"
          id="sex"
          defaultValue={`${user.sex}`}
          {...register("sex")}
        >
          <option value="" disabled>
            Sexo
          </option>
          <option value={"M"}>Masculino</option>
          <option value={"F"}>Femenino</option>
        </select>
        {errors?.sex && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.sex.message}
          </span>
        )}
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          id="address"
          className="inputRegister"
          defaultValue={`${user.address}`}
          {...register("address")}
        />
        {errors?.address && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.address.message}
          </span>
        )}
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          className="inputRegister"
          defaultValue={`${user.contact}`}
          {...register("contact")}
        />
        {errors?.address && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.address.message}
          </span>
        )}
        <label htmlFor="img">Imagem de Perfil</label>
        <input
          type="text"
          id="img"
          className="inputRegister"
          defaultValue={`${user.img}`}
          placeholder="Ex: https://www.google.com/imagem.jpg"
          {...register("img")}
        />
        {errors?.img && (
          <span className="errorRegister">
            <FiAlertCircle />
            {errors.img.message}
          </span>
        )}
        <button className="btnRegister" type="submit">
          Salvar
        </button>
      </form>
    </EditUserDiv>
  );
};
export default FormEditUser;