import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts', {
      params: { userId: userId.toString() }
    });
  }
}

export class Users {
  email!: string
  id!: number
  name!: string
  phone!: string
  username!: string
  website!: string
}

