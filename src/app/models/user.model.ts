import { Role } from "./role.model";

export class User{
   _id:string;
   roles:Role[] = [];
   username:string;
   password:string;
}