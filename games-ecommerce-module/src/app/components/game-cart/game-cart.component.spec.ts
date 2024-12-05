import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCartComponent } from './game-cart.component';

describe('GameCartComponent', () => {
  let component: GameCartComponent;
  let fixture: ComponentFixture<GameCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
