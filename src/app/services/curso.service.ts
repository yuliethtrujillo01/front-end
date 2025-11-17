import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:8081/api/cursos';

  constructor(private http: HttpClient) {}

  crearCurso(curso: any): Observable<any> {
    return this.http.post(this.apiUrl, curso);
  }

  buscarCursos(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/buscar?nombre=${nombre}`);
  }

  eliminarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
