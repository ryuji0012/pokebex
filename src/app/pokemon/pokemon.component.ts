import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonLocationComponent } from '../pokemon-location/pokemon-location.component';
import { PokemonLocation } from '../pokemonlocation';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule,PokemonLocationComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonLocationList: PokemonLocation[] = [];
  pokemonService: PokemonService = inject(PokemonService);
  filteredLocationList: PokemonLocation[] = [];

  constructor() {
    this.pokemonLocationList = 
  this.pokemonService.getAllPokemonLocations();
    this.filteredLocationList = this.pokemonLocationList;
  }
  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList =
    this.pokemonLocationList;
    }
    this.filteredLocationList = 
    this.pokemonLocationList.filter(pokemonLocation => 
      pokemonLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
