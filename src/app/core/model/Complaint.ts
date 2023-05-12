import { ComplaintCategorie } from "./ComplaintCategorie";
import { ComplaintStatus } from "./ComplaintStatus";
import { user } from "./user";

export class Complaint{
    idComplaint!:number;
    title! : string;
    categorie!: ComplaintCategorie;
    created_at!: Date;
    description!:string;
    status!:ComplaintStatus;
    u!:user;
  } 