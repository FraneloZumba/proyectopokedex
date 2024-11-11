import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graficos', // Nombre del componente que se usará en el html
  standalone: true, 
  imports: [NgIf], // Se usa ngIf para el html
  templateUrl: './graficos.component.html', 
  styleUrls: ['./graficos.component.css'] 
})
export class GraficosComponent {
  @Input() stats: any; // Propiedad de entrada para recibir las estadísticas de un Pokémon desde el componente padre.

  // Los stats maximos, pero no son para todos los pokemones.
  maxStats = {
    hp: 100,
    attack: 130,
    defense: 110,
    speed: 160,
    spAttack: 150,
    spDefense: 100,
  };

  // Se inicia con todas en cero. Y se actualizarán con los valores recibidos.
  currentStats = {
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    spAttack: 0,
    spDefense: 0,
  };

  // Calcula el porcentaje de una estadística con respecto a su valor máximo.
  // Esto se usa para representar visualmente la proporción de cada estadística en la interfaz.
  getStatPercentage(stat: keyof typeof this.currentStats) {
    return (this.stats[stat] / this.maxStats[stat]) * 100; // Usa las estadísticas recibidas para calcular el porcentaje.
  }

  // Método que se llama automáticamente cuando cambia el valor de la propiedad de entrada.
  // Si hay nuevas estadísticas, actualiza las estadísticas actuales con los datos recibidos.
  ngOnChanges() {
    if (this.stats) {
      this.currentStats = this.stats; // Asigna los nuevos valores de estadísticas a currentStats.
    }
  }
}
