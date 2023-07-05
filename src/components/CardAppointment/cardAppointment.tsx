import { useContext, useEffect } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { IUserAppointment } from "../../interface/IUserAppointment";
import { IError } from "../../interface/IError";
import { ContainerCardAppointment, ListDoctors } from "./cardAppointmentStyle";
import sucessicon from "../../assets/img/icons/sucessicon.svg";
import iconerror from "../../assets/img/icons/errorico.svg";

const CardAppointment = () => {
  const { setAppointment, appointment, user, setIsLoading } =
    useContext(AuthContext);

  const getAppointment = async () => {
    try {
      const response = await api.get<IUserAppointment[]>(`/appointment/?userId=${user.id}`);
      setAppointment(response.data);
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error("Não foi possível fazer o agendamento!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error" />,
      });
    }
  };

  useEffect(() => {
    getAppointment();
  }, []);

  const cancelAppointment = async (appoint: IUserAppointment) => {
    setIsLoading(true);

    setTimeout(async () => {
      await api.delete(`/appointment/${appoint.id}`);
      const currentAppointments = await api
        .get<IUserAppointment[]>(`/appointment/?userId=${user.id}`)
        .then((res) => res.data);
      setAppointment(currentAppointments);
      toast.success("Consulta cancelada!", {
        theme: "colored",
        icon: <img src={sucessicon} alt="icon sucess" />,
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <ContainerCardAppointment>
      <h2>Meus Agendamentos</h2>
      {appointment.length > 0 ? (
        <ListDoctors>
          {appointment.map((appoint) => {
            return (
              <li key={appoint.id}>
                <div className="containerHeader">
                  <h2 className="doctorName">{appoint.name}</h2>
                  <button onClick={() => cancelAppointment(appoint)}>
                    Cancelar Consulta
                  </button>
                </div>
                <h4>{appoint.speciality}</h4>
                <div className="containerDataAppointment">
                  <div className="containerIcon">
                    <span>
                      <BsCalendar3 />
                    </span>
                    <h3>{appoint.dia}</h3>
                  </div>

                  <div className="containerIcon">
                    <span>
                      <AiOutlineClockCircle />{" "}
                    </span>
                    <h3> {appoint.horario}</h3>
                  </div>

                  <div className="containerIcon">
                    <span>
                      {" "}
                      <MdOutlinePlace />
                    </span>
                    <h3>{appoint.address}</h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ListDoctors>
      ) : (
        <h3>Você não possui agendamentos!</h3>
      )}
    </ContainerCardAppointment>
  );
};

export default CardAppointment;