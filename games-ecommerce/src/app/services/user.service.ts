import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
  usersArray: User[] = [];

  constructor() {
    this.http = inject(HttpClient);
  }

  getUserByEmail(email: string) {
    return this.http.get<User[]>("http://localhost:3000/users").pipe(
      map((usersArray) => usersArray.find((user) => user.email == email))
    );
  }
}
