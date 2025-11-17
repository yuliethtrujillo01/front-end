import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IteracionBiseccion {
  iteracion: number;
  a: number;
  b: number;
  c: number;
  fa: number;
  fc: number;
  error: number;
}

export interface BiseccionResponse {
  curso: string;
  metodo: string;
  funcion: string;
  raizAproximada: number;
  iteraciones: IteracionBiseccion[];
  convergio: boolean;
  mensaje: string;
}

export interface Ova {
  id: number;
  nombre: string;
  descripcion: string;
  cursoId: number;
}

export interface BiseccionRequest {
  funcion: string;
  a: number;
  b: number;
  tolerancia: number;
  iteraciones: number;
}

export interface CifradoRequest {
  mensaje: string;
  tipo: string;     // "cesar" o "escitala"
  operacion: string; // "cifrar" o "descifrar"
  clave?: number;    // usado por César
  filas?: number;    // usado por Escítala
}

@Injectable({
  providedIn: 'root'
})
export class OvaService {
  private apiUrl = 'http://localhost:8080/api/ova';

  constructor(private http: HttpClient) {
  }

  getOvasPorCurso(cursoId: number): Observable<Ova[]> {
    return this.http.get<Ova[]>(`${this.apiUrl}/curso/${cursoId}`);
  }

  ping(): Observable<string> {
    return this.http.get(`${this.apiUrl}/ping`, {responseType: 'text'});
  }

  metodoBiseccion(request: BiseccionRequest): Observable<BiseccionResponse> {
    return this.http.post<BiseccionResponse>(`${this.apiUrl}/analisis-numerico`, request);
  }

  procesarCifrado(request: CifradoRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/matematicas-discretas`, request);
  }

}
