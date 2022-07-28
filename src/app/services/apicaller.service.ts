import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallerService {

  constructor(private http: HttpClient) {

  }

  public get(url:string){
    return this.http.get<any>(url); // GET to the api
  }
}
