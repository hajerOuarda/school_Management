import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment"
import {Student} from "../models/student";
import {map} from "rxjs/operators";
import {Professor} from "../../../models/professor";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
    super.path = 'user/';
  }

  // @ts-ignore
  addOne(type: string, user: User): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "user/" + type, user);
  }

  findAll() {
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

}
