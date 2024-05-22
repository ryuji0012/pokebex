import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonLocation } from '../pokemonlocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pokemon-location.component.html',
  styleUrl: './pokemon-location.component.css'
})
export class PokemonLocationComponent {
  @Input() pokemonLocation!: PokemonLocation;
}
