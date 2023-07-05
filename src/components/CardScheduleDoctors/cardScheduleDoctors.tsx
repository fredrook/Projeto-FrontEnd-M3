import { useContext } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { IError } from "../../interface/IError";
import { IDoctorSchedule } from "../../interface/IDoctorSchedule";
import { StyledAlert } from "../EmptyObjectAlert/emptyObjectAlert";
import { IAppointmentInfo } from "../../interface/IAppointmentInfo";
import { ContainerRenderDoctorSchedule, ContainerSchedule } from "./cardScheduleDoctorStyle";
import sucessicon from "../../assets/img/icons/sucessicon.svg";
import iconerror from "../../assets/img/icons/errorico.svg";

const CardScheduleDoctor = () => {
  const { doctorSchedule, doctor, user, setDoctorSchedule, setIsLoading } =  useContext(AuthContext);

  const navigate = useNavigate();

  const postAppointment = async (data: IAppointmentInfo) => {
    try {
      await api.post(`/appointment`, data);
      navigate("/dashboard", { replace: true });
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Agendamento concluído!", {
          theme: "colored",
          icon: <img src={sucessicon} alt="icon sucess" />,
        });
      }, 2000);
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error("Algo deu errado!", {
        theme: "colored",
        icon: <img src={iconerror} alt="icon error" />,
      });
    }
  };

  const editScheduleDoctor = async (schedule: IDoctorSchedule) => {
      setDoctorSchedule(
      doctorSchedule.filter((horario) => horario.id !== schedule.id)
    );
    const obj = {
      schedules: doctorSchedule.filter(
        (horario) => horario.id !== schedule.id
      ),
    };
    const token = localStorage.getItem("@context-KenzieMed:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api.patch(`/doctors/${doctor.id}`, obj);
    navigate("/dashboard", { replace: true });
  };

  const setAppointmentToUser = (schedule: IDoctorSchedule) => {
    const appointInfo: IAppointmentInfo = {
      userId: user.id,
      doctor: doctor.id,
      dia: schedule.dia,
      horario: schedule.hora,
      address: doctor.address,
      speciality: doctor.speciality,
      name: doctor.name,
    };
    setIsLoading(true);
    postAppointment(appointInfo);
    editScheduleDoctor(schedule);
    setIsLoading(true);
  };

  return (
    <ContainerRenderDoctorSchedule>
      <div className="doctorData">
        <div>
          <h2>{doctor.name}</h2>
          <span>
            {doctor.speciality} - CRM - {doctor.CRM}
          </span>
        </div>
        <button
          onClick={() => {
            navigate("/corpoclinico");
          }}
        >
          <BsArrowLeftShort /> Voltar
        </button>
      </div>

      <div className="containerSchedule">
        <ContainerSchedule>
          <ul>
            {doctorSchedule.length > 0 ? (
              doctorSchedule.map((schedule) => (
                <li key={schedule.id}>
                  <div className="containerList">
                    <BsCalendar3 />
                    <h3>{schedule.dia}</h3>
                  </div>
                  <div className="containerList">
                    <AiOutlineClockCircle />
                    <h3>{schedule.hora}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAppointmentToUser(schedule)}
                  >
                    <AiOutlinePlusCircle />
                  </button>
                </li>
              ))
            ) : (
              <StyledAlert>
                <AiOutlineExclamationCircle size={28} />
                Horários indisponíveis
              </StyledAlert>
            )}
          </ul>
        </ContainerSchedule>
      </div>
    </ContainerRenderDoctorSchedule>
  );
};

export default CardScheduleDoctor;