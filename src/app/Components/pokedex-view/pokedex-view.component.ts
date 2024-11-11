import { Component } from '@angular/core';
import { PokedexComponent } from "../pokedex/pokedex.component";
import { GraficosComponent } from "../graficos/graficos.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficosComponent, NgIf],
  templateUrl: './pokedex-view.component.html',
  styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
  pokemonImageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  pokemonName: string = 'Desconocido';
  pokemonType: string = 'Desconocido';
  pokemonId: number | null = null; // Agregado para almacenar el ID del Pokémon
  isShiny: boolean = false;

  currentStats = {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    spAttack: 0,
    spDefense: 0,
  };

  searchPokemon(pokemonInput: string) {
    if (pokemonInput === '0') {
      this.resetPokemonData();
      return;
    }

    const isNumber = !isNaN(Number(pokemonInput));
    const apiUrl = isNumber 
      ? `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
      : `https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`;
      
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return response.json();
      })
      .then(data => {
        this.updatePokemonData(data);
      })
      .catch(error => {
        console.error(error);
        this.resetPokemonData();
      });
  }

  toggleShiny() {
    this.isShiny = !this.isShiny;
    const pokemonNumber = this.pokemonImageUrl.split('/').pop()?.split('.')[0] || '0';
    this.updatePokemonImageUrl(pokemonNumber);
  }

  private updatePokemonData(data: any) {
    this.currentStats.hp = data.stats[0].base_stat;
    this.currentStats.attack = data.stats[1].base_stat;
    this.currentStats.defense = data.stats[2].base_stat;
    this.currentStats.speed = data.stats[5].base_stat;
    this.currentStats.spAttack = data.stats[3].base_stat;
    this.currentStats.spDefense = data.stats[4].base_stat;
    this.pokemonName = data.name;
    this.pokemonType = data.types.map((typeInfo: any) => typeInfo.type.name).join(', ');
    this.pokemonId = data.id; // Actualiza el ID del Pokémon
    this.updatePokemonImageUrl(data.id);
  }

  private updatePokemonImageUrl(pokemonNumber: string | number) {
    const shinyPath = this.isShiny ? 'shiny/' : '';
    this.pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shinyPath}${pokemonNumber}.png`;
  }

  private resetPokemonData() {
    this.pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    this.pokemonName = 'Desconocido';
    this.pokemonType = 'Desconocido';
    this.pokemonId = null; // Resetea el ID
    this.currentStats = {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      spAttack: 0,
      spDefense: 0,
    };
    this.isShiny = false;
  }
}
