import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Classe} from "../models/classe";

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private readonly httpClient: HttpClient) {

  }

  addClass(_class: Classe) {
    return this.httpClient.post(environment.apiUrl + 'class/', _class)
  }
}
