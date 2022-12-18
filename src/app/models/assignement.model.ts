import { Eleve } from "./eleve.model";
import { Matiere } from "./matiere.model";

export class Assignement{
   _id:string;
   nom:string;
   dateDeRendu:Date;
   rendu:boolean;
   note:number;
   matiere:Matiere;
   eleve:Eleve;
   remarque:string;
}