import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonLocation } from '../pokemonlocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);
  pokemonLocation: PokemonLocation | undefined;

  constructor() {
    const pokemonLocationId = 
  Number(this.route.snapshot.params['id']);
    this.pokemonLocation = 
  this.pokemonService.getPokemonLocationById(pokemonLocationId); 
  }

}
