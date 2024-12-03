import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userService: UserService;
  constructor() {
    this.userService = inject(UserService);
  }

  isAuthenticated(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "null");
    return loggedUser != null;
  }

  loginUser(email: string, password: string) {
    if(email == "admin@admin.com" && password == "admin123") {
      localStorage.setItem("loggedUser", JSON.stringify({
        email, password
      }));
      return true;
    }

    return false;
    // return this.userService.getUserByEmail(email).subscribe((user) => {
    //   if (user?.password === password) return true; // loguei o meu usuário

    //   return false; // não loguei o meu usuário
    // });
  }

  logoutUser() {
    localStorage.removeItem("loggedUser");
  }
}
