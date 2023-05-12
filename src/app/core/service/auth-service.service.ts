import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9797/api/auth/';
declare var cordova: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) { }
  register(nom: string, prenom: string, username: string, email: string, password: string, dateNaissance: Date, roles: string[],photo: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        nom,
        prenom,
        username,
        email,
        password,
        dateNaissance,
        roles,
        photo
      },
      httpOptions
    );
  }

  getRoles(): Observable<any> {
    return this.http.get(AUTH_API + 'roles');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }


}

