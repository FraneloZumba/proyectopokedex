import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  // Define los valores máximos y actuales de las estadísticas
  maxStats = {
    hp: 100,
    attack: 130,
    defense: 110,
    speed: 160,
    spAttack: 150,
    spDefense: 100,
  };

  currentStats = {
    hp: 72,
    attack: 95,
    defense: 67,
    speed: 122,
    spAttack: 103,
    spDefense: 71,
  };

  // Método para calcular el porcentaje de cada estadística
  getStatPercentage(stat: keyof typeof this.currentStats) {
    return (this.currentStats[stat] / this.maxStats[stat]) * 100;
  }
}
