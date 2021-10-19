import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "../models/subject";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";


export class BaseService {

  protected path!: string;

  constructor(protected readonly httpClient: HttpClient) {

  }

  addOne(payload: any = {}) {
    return this.httpClient.post(environment.apiUrl + this.path, payload)
  }

  update(payload: any, id: number) {
    return this.httpClient.put(environment.apiUrl + this.path+ id , payload)
  }

  findAll() {
    return this.httpClient.get(environment.apiUrl + this.path)
      .pipe(
        map((val: any) => {
          return val;
        })
      );
  }

  findOne(id: number) {
    return this.httpClient.get(environment.apiUrl + this.path  + id)
  }

  deleteOne(id: number) {
    return this.httpClient.delete(environment.apiUrl + this.path + id);
  }

}
