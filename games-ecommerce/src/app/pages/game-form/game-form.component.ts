import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss'
})
export class GameFormComponent {
  private gameService: GameService;
  private router: Router;
  private snackBar: MatSnackBar;
  gameForm: FormGroup;

  constructor() {
    this.gameService = inject(GameService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);

    this.gameForm = new FormGroup({
      title: new FormControl('', Validators.required),
      platform: new FormControl('', Validators.required),
      imageLink: new FormControl('', [Validators.required, ]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required, ]),
      availableInStock: new FormControl(0, [Validators.required, ]),
    });
  }

  submitForm(){
    console.log("Formulário foi submetido!");
    console.log(this.gameForm.value);
    
    // this.gameService.createGame(this.gameForm.value).pipe(
    //   catchError((err) => {
    //     this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar");
    //     return throwError(() => err);
    //   })
    // ).subscribe(() => {
    //   this.snackBar.open("Game adicionado com sucesso!", "Fechar");
    //   this.router.navigate(['games']);
    // });

    this.gameService.createGame(this.gameForm.value).subscribe({
      next: () => {
        this.snackBar.open("Game adicionado com sucesso!", "Fechar");
        this.router.navigate(['games']);
      },
      error: () => {
        this.snackBar.open("Erro interno do servidor. Contate o suporte para mais informações!", "Fechar");
      }
    });
  }
}
