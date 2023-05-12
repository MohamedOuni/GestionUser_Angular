import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MyProfile {
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

 
  updateUser(updatedUser: any, password: string) {
    const url = 'http://localhost:9797/api/users/modifieruser?password=' + password;
    return this.http.put(url, updatedUser);
  }

  private baseUrl = 'http://localhost:9797/api/users';
  getMyProfile(): Observable<MyProfile> {
    return this.http.get<MyProfile>(`${this.baseUrl}/MyProfile`);
  }
  private apiUrl = 'http://localhost:9797/api/users';
  deleteUser(currentPassword: string): Observable<void> {
    const url = `${this.apiUrl}/Delete`;
    return this.http.delete<void>(url, {
      params: { currentPassword }
    });
  }


  getUserPhoto(email: string): Observable<Blob> {
    return this.http.get(`http://localhost:9797/api/auth/users/${email}/photo`, { responseType: 'blob' });
  }
}




