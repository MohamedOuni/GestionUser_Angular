import { AppointmentStatus } from "./AppointmentStatus";
import { univ } from "./univ";
import { user } from "./user";

export class Appointment{
    idAppointment!:number;
    title!:string;
    date!:string;
    status!:AppointmentStatus;
    user!:user;
	universityOfficer!:univ;
}