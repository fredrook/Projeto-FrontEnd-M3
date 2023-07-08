import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftShort, BsCalendar3 } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { AxiosError } from "axios";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { IDoctors } from "../../interface/IDoctors";
import { IError } from "../../interface/IError";
import { ICardDoctorProps } from "../../interface/ICardDoctorProps";
import { ContainerDoctors, ListDoctors } from "./cardDoctorsStyle";
import { toast } from "react-toastify";

const CardDoctors = ({ doctorsList }: ICardDoctorProps) => {
  const {
    setDoctorSchedule,
    setDoctor,
    setDoctorsList,
    itemFilter,
    setItemFilter,
    setIsLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const getDoctor = async () => {
    try {
      if (doctorsList.length === 0) {
        setIsLoading(true);
        const response = await api.get<IDoctors[]>("/doctors");
        setDoctorsList(response.data);
        setTimeout(async () => {
          setIsLoading(false);
        }, 2000);
      } else {
        const response = await api.get<IDoctors[]>("/doctors");
        setDoctorsList(response.data);
      }
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error("Algo deu errado! Tente novamente!", {
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <ContainerDoctors>
      <ListDoctors>
        {doctorsList.map((doctor) => (
          <div key={doctor.id}>
            {/* Renderizar os dados do médico aqui */}
            <div className="containerHeader">
              <h2>{doctor.name}</h2>
              <button>
                <BsCalendar3 />
              </button>
            </div>
            <span>CRM - {doctor.CRM}</span>
            <h3>{doctor.speciality}</h3>
            <h3>
              <MdOutlinePlace />
              {doctor.address}
            </h3>
          </div>
        ))}
      </ListDoctors>
    </ContainerDoctors>
  );
};

export default CardDoctors;
