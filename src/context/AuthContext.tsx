import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { ICustomizedState } from "../interface/ICustomizedState";
import { IUserAppointment } from "../interface/IUserAppointment";
import { IDoctorSchedule } from "../interface/IDoctorSchedule";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IAuthContext } from "../interface/IAuthContext";
import { AxiosError } from "axios";
import { IUserLogin } from "../interface/IUserLogin";
import { IDoctors } from "../interface/IDoctors";
import { IUser } from "../interface/IUser";
import { toast } from "react-toastify";
import { IPost } from "../interface/IPost";
import api from "../services/api";
import iconerror from "../assets/img/icons/errorico.svg";
import sucessicon from "../assets/img/icons/sucessicon.svg";
import { IError } from "../interface/IError";
import { IEditProfile } from "../interface/IEditProfile";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [doctorsList, setDoctorsList] = useState<IDoctors[]>([]);
  const [doctor, setDoctor] = useState<IDoctors>({} as IDoctors);
  const [doctorSchedule, setDoctorSchedule] = useState<IDoctorSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [itemFilter, setItemFilter] = useState<IDoctors[]>([]);
  const [inputFilter, setInputFilter] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [appointment, setAppointment] = useState<IUserAppointment[]>(
    [] as IUserAppointment[]
  );

  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("@context-KenzieMed:token");

  useEffect(() => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("@context-KenzieMed:user")!));
      setLogin(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const SignIn = async (data: IUserLogin) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const res = await api.post<IPost>("/login", data);
        const { user: userResponse } = res.data;
        const token = JSON.stringify(res.data.accessToken)?.replace(/"/gi, "");
        setUser(userResponse);

        localStorage.setItem(
          "@context-KenzieMed:user",
          JSON.stringify(userResponse)
        );
        localStorage.setItem(
          "@context-KenzieMed:userId",
          JSON.stringify(res.data.user.id)
        );
        localStorage.setItem("@context-KenzieMed:token", token);

        setLogin(true);

        const state = location.state as ICustomizedState;

        let toNavigate = "/dashboard";

        if (state) {
          toNavigate = state.from;
        }
        navigate(toNavigate, { replace: true });
        setIsLoading(false);
        toast.success("Login efetuado com sucesso!", {
          theme: "colored",
          icon: <img src={sucessicon} alt="icon sucess" />,
        });
      } catch (error) {
        const err = error as AxiosError;
        toast.error("Erro ao efetuar Login!", {
          theme: "colored",
          icon: <img src={iconerror} alt="icon error" />,
        });
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  const onSubmitRegister = async (data: IUser) => {
    const newData = {
      ...data,
      img: "",
    };
    await api
      .post<IPost>("/users", newData)
      .then((response) => {
        toast.success("Cadastro efetuado com sucesso", {
          theme: "colored",
          icon: <img src={sucessicon} alt="icon sucess" />,
        });
        navigate("/login");
      })
      .catch((error: AxiosError<IError>) => {
        toast.error("Ops, Algo deu errado", {
          theme: "colored",
          icon: <img src={iconerror} alt="icon error" />,
        });
      });
  };

  const filterDoctors = (inputFilter: string) => {
    const ArrayfilterDoctors = doctorsList.filter((elem) =>
      elem.speciality.toLowerCase().includes(inputFilter.toLowerCase())
    );
    if (ArrayfilterDoctors.length === 0) {
      toast.error("Não conseguimos encontrar essa especialidade..", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error" />,
      });
      setItemFilter(doctorsList);
    } else {
      setItemFilter(ArrayfilterDoctors);
    }
  };

  const EditUserProfile = async (data: IEditProfile) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      CPF: data.CPF,
      age: data.age,
      sex: data.sex,
      address: data.address,
      contact: data.contact,
      img: data.img,
    };
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await api.patch<IUser>(`/users/${user.id}`, newData);
      localStorage.setItem("@context-KenzieMed:user", JSON.stringify(res.data));
      setUser(res.data);
      toast.success("Dados alterados com sucesso!", {
        theme: "colored",
        icon: <img src={sucessicon} alt="icon sucess" />,
      });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error("Algo deu errado! Tente novamente!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error" />,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        user,
        login,
        setLogin,
        loading,
        setLoading,
        SignIn,
        onSubmitRegister,
        doctorsList,
        setDoctorsList,
        doctorSchedule,
        setDoctorSchedule,
        itemFilter,
        filterDoctors,
        setItemFilter,
        inputFilter,
        setInputFilter,
        doctor,
        setDoctor,
        isOpenModal,
        setIsOpenModal,
        appointment,
        setAppointment,
        EditUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;