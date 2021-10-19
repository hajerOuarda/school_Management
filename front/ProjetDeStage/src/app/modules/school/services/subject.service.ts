import {Injectable} from '@angular/core';
import {Subject} from "../models/subject";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends BaseService {


  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
    super.path = 'subject/';
  }


}
