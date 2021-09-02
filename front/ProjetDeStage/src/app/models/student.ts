import {User} from "./user";

export class Student extends User {
    cne! :number;
    address!:String;
  bacYear!:String;
  desiredCareer! :String ;
  careerOption!:String ;
    sex?: 'femme'|'homme'|'autre' ;


}
