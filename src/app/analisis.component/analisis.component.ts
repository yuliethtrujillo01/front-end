import { Component } from '@angular/core';
import { OvaService, BiseccionRequest, BiseccionResponse, IteracionBiseccion } from '../services/ova.service';

@Component({
  selector: 'app-analisis.component',
  standalone: false,
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.css',
})
export class AnalisisComponent {
  biseccionRequest: BiseccionRequest = {
    funcion: 'x^2 - 4',
    a: 0,
    b: 3,
    tolerancia: 0.001,
    iteraciones: 100
  };

  resultado: BiseccionResponse | null = null;
  iteraciones: IteracionBiseccion[] = [];
  cargando = false;
  error = '';

  constructor(private ovaService: OvaService) {}

  ejecutarBiseccion() {
    this.cargando = true;
    this.error = '';
    this.resultado = null;
    this.iteraciones = [];

    this.ovaService.metodoBiseccion(this.biseccionRequest).subscribe({
      next: (response) => {
        this.resultado = response;
        this.iteraciones = response.iteraciones;
        this.cargando = false;
      },
      error: (err) => {
        this.error = err.error?.mensaje || 'Error en el cálculo';
        this.cargando = false;
      }
    });
  }
}
