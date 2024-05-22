import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLocationComponent } from './pokemon-location.component';

describe('PokemonLocationComponent', () => {
  let component: PokemonLocationComponent;
  let fixture: ComponentFixture<PokemonLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
