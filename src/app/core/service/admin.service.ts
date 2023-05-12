import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiURL = 'http://localhost:9797/api/adminEsprit';


  constructor(private http: HttpClient) {}

  getUserRoleStats(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>(`${this.apiURL}/Statistique`);
  }
  private apiUrl = 'http://localhost:9797/api/adminEsprit';


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/AllUser`);
  }

  getUserByUsername(username: string): Observable<User> {
    const url = `http://localhost:9797/api/adminEsprit/ProfileUserByName/${username}`;
    return this.http.get<User>(url);
  }
  
}


export interface User {
  id_user: number;
  username: string;
  email: string;
  dateNaissance: Date;
  nom:string;
  prenom: string;
  roles: string[];
}









