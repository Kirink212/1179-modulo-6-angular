import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private snackBar: MatSnackBar;
  private authService: AuthService;
  private router: Router;

  loginForm: FormGroup;
  emailError: string = "";
  passwordError: string = "Senha inválida.";

  constructor() {
    this.snackBar = inject(MatSnackBar);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  updateEmailErrorMessage() {
    if (this.loginForm.controls["email"].hasError('required')) {
      this.emailError = 'Campo e-mail deve ser preenchido';
    } else if (this.loginForm.controls["email"].hasError('email')) {
      this.emailError = 'Campo e-mail inválido';
    } else {
      this.emailError = '';
    }
  }

  submitForm() {
    const loggedIn = this.authService.loginUser(
      this.loginForm.get("email")?.value,
      this.loginForm.get("password")?.value
    );

    if (!loggedIn) {
      this.snackBar.open(
        "Não foi possível logar. Tente novamente com credenciais válidas!",
        "Close",
        {
          horizontalPosition: "end",
          verticalPosition: "top",
          duration: 5000,
        }
      )

      return;
    }

    this.router.navigate(['form']);
  }
}