import {User} from "./user";

export class Student extends User {
    cne! :number;
    adresse!:String;
    anneeBac!:String;
    parcoursDesiree! :String ;
    optionParcours!:String ;
    sexe?: 'femme'|'homme'|'autre' ;
    // userType = 'Student';


}
