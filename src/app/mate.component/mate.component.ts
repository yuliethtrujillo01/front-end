import { Component } from '@angular/core';
import { OvaService, CifradoRequest } from '../services/ova.service';

@Component({
  selector: 'app-mate.component',
  standalone: false,
  templateUrl: './mate.component.html',
  styleUrl: './mate.component.css',
})
export class MateComponent {
  cifradoRequest: CifradoRequest = {
    mensaje: '',
    tipo: 'cesar',
    operacion: 'cifrar',
    clave: 3,
    filas: 3
  };

  resultado: any;
  cargando = false;
  error = '';

  constructor(private ovaService: OvaService) {}

  procesarCifrado() {
    this.cargando = true;
    this.error = '';
    this.resultado = null;

    this.ovaService.procesarCifrado(this.cifradoRequest).subscribe({
      next: (response) => {
        this.resultado = response;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error en el cifrado: ' + err.message;
        this.cargando = false;
      }
    });
  }

  cambiarTipo(tipo: string) {
    this.cifradoRequest.tipo = tipo;
    this.resultado = null;
  }
}
