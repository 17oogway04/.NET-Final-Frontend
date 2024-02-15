import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:5009/api/auth";

  constructor(private http: HttpClient) { }

  signUp(newUser: User){

  }

  login(username: string, password: string){
    
  }
}
