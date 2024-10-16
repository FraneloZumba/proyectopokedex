import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  imgUrl: string="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png"

}
