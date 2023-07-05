export interface IUserAppointment {
  id: number;
  userId: number;
  doctor: number;
  name: string;
  speciality: string;
  address: string;
  dia: string;
  horario: string;
  isConfirmed?: true;
};