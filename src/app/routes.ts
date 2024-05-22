import { Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
      path: '',
      component: PokemonComponent,
      title: 'pokedex'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Pokemon details'
    }
  ];
  
  export default routeConfig;