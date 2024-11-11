import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  imgUrl: string="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
  // Almacena la URL de la imagen del Pokémon que se va a mostrar en la interfaz, que en este caso el 0 es el signo de interrogación.

}
