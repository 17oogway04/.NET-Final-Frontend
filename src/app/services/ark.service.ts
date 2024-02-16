import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arks } from '../models/arks';
import { Observable, using } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ArkService {

  baseUrl: string = "http://localhost:5009/api/Ark";
  tokenKey: string = "myArkToken";

  constructor(private http: HttpClient) { }

  getAllArks(): Observable<Arks[]> {
    return this.http.get<Arks[]>(this.baseUrl);
  }

  getArk(arkId: string) {
    return this.http.get<Arks>(this.baseUrl + "/" + arkId);
  }
  getUser(userId: string) {
    return this.http.get<User>(this.baseUrl + "/" + userId);
  }
  createArk(newArk: Arks) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.post(this.baseUrl, newArk, { headers: reqHeaders });
  }


  updateArk(id: string, updatedArk: Arks) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.put(this.baseUrl + "/" + id, updatedArk, { headers: reqHeaders });
  }

  deleteArk(arkId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.delete(this.baseUrl + "/" + arkId, { headers: reqHeaders});
  }
}
