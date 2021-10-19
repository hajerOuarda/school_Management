import {User} from "../modules/school/models/user";

export class Professor extends User{
  cin! :String ;
  matiereEnseigne! :String ;
  titreProf! :string ;
  cv! :String ;
  salaire! :String ;

  // userType = 'Prof';
}
