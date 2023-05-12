

export class Comment {
  id!: number;
body!:string;
  dateCreated!: Date;

  score!: number;
  user!:User;
  commentCount:number=0;
}
interface User{username:String}




