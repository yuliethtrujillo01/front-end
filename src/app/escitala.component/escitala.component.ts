import { Component } from '@angular/core';
import { OvaService, CifradoRequest } from '../services/ova.service';

@Component({
  selector: 'app-escitala.component',
  standalone: false,
  templateUrl: './escitala.component.html',
  styleUrl: './escitala.component.css',
})
export class EscitalaComponent {
  cifradoRequest: CifradoRequest = {
    mensaje: '',
    tipo: 'escitala',
    operacion: 'cifrar',
    filas: 4
  };

  resultado: any;
  cargando = false;
  error = '';
  operacionActual = '';

  constructor(private ovaService: OvaService) {}

  procesarCifrado(operacion: string) {
    this.cargando = true;
    this.error = '';
    this.resultado = null;
    this.operacionActual = operacion;

    // Actualizar la operación en la request
    this.cifradoRequest.operacion = operacion;

    this.ovaService.procesarCifrado(this.cifradoRequest).subscribe({
      next: (response) => {
        this.resultado = response;
        this.cargando = false;
        console.log('Resultado recibido:', response);
      },
      error: (err) => {
        this.error = err.error?.error || 'Error en el procesamiento';
        this.cargando = false;
        console.error('Error:', err);
      }
    });
  }
}
