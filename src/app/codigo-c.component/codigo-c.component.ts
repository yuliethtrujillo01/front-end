import { Component } from '@angular/core';
import { OvaService, CifradoRequest } from '../services/ova.service';

@Component({
  selector: 'app-codigo-c.component',
  standalone: false,
  templateUrl: './codigo-c.component.html',
  styleUrl: './codigo-c.component.css',
})
export class CodigoCComponent {
  // Variables para cifrado
  mensajeCifrar: string = '';
  claveCifrar: number = 3;
  resultadoCifrar: string = '';

  // Variables para descifrado
  mensajeDescifrar: string = '';
  claveDescifrar: number = 3;
  resultadoDescifrar: string = '';

  cargando = false;
  error = '';
  operacionActual = '';

  constructor(private ovaService: OvaService) {}

  procesarCifrado(operacion: string) {
    this.cargando = true;
    this.error = '';
    this.operacionActual = operacion;

    // Preparar la request según la operación
    const request: CifradoRequest = {
      mensaje: operacion === 'cifrar' ? this.mensajeCifrar : this.mensajeDescifrar,
      tipo: 'cesar',
      operacion: operacion,
      clave: operacion === 'cifrar' ? this.claveCifrar : this.claveDescifrar
    };

    this.ovaService.procesarCifrado(request).subscribe({
      next: (response) => {
        // Asignar el resultado a la sección correspondiente
        if (operacion === 'cifrar') {
          this.resultadoCifrar = response.resultado;
        } else {
          this.resultadoDescifrar = response.resultado;
        }
        this.cargando = false;
        console.log('Resultado recibido:', response);
      },
      error: (err) => {
        this.error = err.error?.error || 'Error en el procesamiento';
        this.cargando = false;
        console.error('Error:', err);

        // Mostrar error en la sección correspondiente
        if (operacion === 'cifrar') {
          this.resultadoCifrar = `Error: ${this.error}`;
        } else {
          this.resultadoDescifrar = `Error: ${this.error}`;
        }
      }
    });
  }
}
