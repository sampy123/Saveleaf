
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const URL = "http://169.254.135.220:3000";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAuthentication(data) {
    return this.http.post(URL + "/user/signin", data);
  }
}
export class UserData {
  email: any
  password: any
}

