import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment"
import {Student} from "../models/student";
import {map} from "rxjs/operators";
import {Professor} from "../models/professor";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private readonly httpClient: HttpClient) {
  }

  addUser(type: string, user: User): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "user/" + type, user);
  }

  showAllUsers() {
    return this.httpClient.get(environment.apiUrl + "user/")
      .pipe(
        map((el: any) => {
          if (el.userType == "Student")
            el = el as Student;
          else if (el.userType == "Professor")
            el = el as Professor;
          else
            el = el as User;
          return el;
        })
      );
  }

  updateUser(user: any, id: number) {
    return this.httpClient.put(environment.apiUrl + "user/" + id, user)
  }

  findOne(id: number) {
    return this.httpClient.get(environment.apiUrl + "user/" + id)
  }

  deleteUser(id: number) {
    return this.httpClient.delete(environment.apiUrl + "user/" + id)
  }
}
