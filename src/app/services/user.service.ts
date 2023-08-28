import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/students'

  constructor(private http:HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  } 

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getSingleUser(id: number):Observable<User> {
    const newUrl = `${this.url}/${id}`;
    return this.http.get<User>(newUrl)
  }

  updateUser(user: User): Observable<User> {
    const newUrl = `${this.url}/${user.id}`;
    return this.http.put<User>(newUrl, user, httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    const newUrl = `${this.url}/${user.id}`;
    return this.http.delete<User>(newUrl);
  }
}
