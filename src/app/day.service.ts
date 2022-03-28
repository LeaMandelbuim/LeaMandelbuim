import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  _http: HttpClient;

  constructor(private http: HttpClient) {
    this._http = http;
   }
   getdayFromServer(): Observable<Object[]> {
    return this._http.get<Object[]>("https://raw.githubusercontent.com/RachelVinograd/JSON/main/data");
   }
}
