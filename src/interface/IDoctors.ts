import { IDoctorSchedule } from "./IDoctorSchedule";

export interface IDoctors{
    id: number;
    email: string;
    name: string;
    age: string;
    sex: string;
    type: string
    CRM: string;
    address: string;
    speciality: string;
    schedules: IDoctorSchedule[];
    img: string;
};