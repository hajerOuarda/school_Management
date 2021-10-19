export abstract class User {
  firstName?: string; //null or has value
  lastName?: string;
  phone!: number; //has value
  email?:string ;

  userType: string = "User";
}
