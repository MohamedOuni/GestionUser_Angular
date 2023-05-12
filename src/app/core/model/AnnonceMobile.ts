
import { CommentAnnonce } from "./CommentAnnonce";
export class AnnonceMobile {
  id_Annonce: any;
  titre!: string;
  description_mobilite!: string;
  nombreDePlace!: number;
  datePublicationn!: Date;
  photo?:string;
  dateLimiteInsription!: Date;
  lieu!: string;
  state!: string;
  categorie!: string;
  loveReact!: number;
  signale!: number;
  commentaire: CommentAnnonce[] = [];
  showConfirmationButtons?: boolean;
  estAime!: boolean;
  rating! :100;
}