import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class ClassService extends BaseService {

  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
    super.path = 'class/';
  }


}
