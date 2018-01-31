import { Injectable } from '@angular/core';
import {Verein} from './verein';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/observable';

@Injectable()
export class VereineService {

  constructor(private http: HttpClient) {}

  get vereine(): Observable<Array<Verein>>{
    return this.http.get<Array<Verein>>('http://localhost:3000/vereine');
  }

  getVerein(id: number): Observable<Verein>{
    return this.http.get<Verein>('http://localhost:3000/vereine/'+id);
  }
}
