import { Appointment } from "./Appointments";

export class univ{
    id_user!:number;
    nom!: string;
    prenom!:string;
    username!:string;
    email!: string;
    password!: string;
    dateNaissance!:Date ;
    appointments!:Appointment[];
  } 