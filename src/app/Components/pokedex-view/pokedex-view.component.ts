import { Component } from '@angular/core';
import { PokedexComponent } from "../pokedex/pokedex.component";
import { GraficosComponent } from "../graficos/graficos.component";

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficosComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css'] // Cambié styleUrl a styleUrls
})
export class PokedexViewComponent {
  pokemonImageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png';

  searchPokemon(pokemonNumber: string) {
    if (pokemonNumber) {
      this.pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
    }
  }
}
