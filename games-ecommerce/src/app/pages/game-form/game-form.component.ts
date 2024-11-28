import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

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
  gameForm: FormGroup;

  constructor() {
    this.gameService = inject(GameService);
    this.router = inject(Router);

    this.gameForm = new FormGroup({
      title: new FormControl('', [Validators.required, ]),
      platform: new FormControl(''),
      imageLink: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl(''),
      availableInStock: new FormControl(0),
    });
  }

  submitForm(){
    console.log("Formulário foi submetido!");
    console.log(this.gameForm.value);

    this.gameService.createGame({
      id: this.gameService.getNextId(),
      ...this.gameForm.value
    });

    this.router.navigate(['games']);
  }
}
