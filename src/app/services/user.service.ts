import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5009/api/auth";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){
    return this.http.post(`${this.baseUrl}/register`, newUser);
  }

  login(username: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseUrl}/login`, {params: queryParams, responseType: 'text'})
    .pipe(tap((response: any) => {
      localStorage.setItem('myArkToken', response);
    }));
  }

  
}
