import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso',
  standalone: false,
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css',
})
export class CursoComponent {
  apiUrl = 'http://localhost:8081/api/cursos';

  nuevoCurso = {
    nombre: '',
    descripcion: '',
    duracion: 0
  };

  nombreBusqueda = '';
  cursos: any[] = [];

  constructor(
    private http: HttpClient,
    private cursoService: CursoService
  ) {}

  // Crear curso y actualizar la lista
  crearCurso() {
    this.http.post(this.apiUrl, this.nuevoCurso).subscribe({
      next: () => {
        alert("Curso creado exitosamente!");
        this.nuevoCurso = { nombre: '', descripcion: '', duracion: 0 };


        if (this.nombreBusqueda.trim() !== '') {
          this.buscarCursos();
        }
      },
      error: (error) => {
        console.error('Error creando curso:', error);
        alert('Error al crear el curso');
      }
    });
  }

  // Buscar cursos
  buscarCursos() {
    if (this.nombreBusqueda.trim() === '') {
      // Si la búsqueda está vacía, limpiar la lista
      this.cursos = [];
      return;
    }

    this.http.get<any[]>(`${this.apiUrl}/buscar?nombre=${this.nombreBusqueda}`)
      .subscribe({
        next: (data) => {
          this.cursos = data;
        },
        error: (error) => {
          console.error('Error buscando cursos:', error);
          alert('Error al buscar cursos');
        }
      });
  }

  // Eliminar curso
  eliminarCurso(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {

      // Eliminar inmediatamente para mejor experiencia
      this.cursos = this.cursos.filter(curso => curso.id !== id);

      // Llamar al backend (manejar errores silenciosamente)
      this.cursoService.eliminarCurso(id).subscribe({
        next: () => console.log('✅ Curso eliminado del backend'),
        error: (error: any) => {  // ✅ AGREGAR TIPO 'any'
          // Solo log para debugging, no molestar al usuario
          if (error.status === 404) {
            console.log('ℹ️ Curso ya no existía en el backend');
          } else {
            console.warn('⚠️ Error en backend al eliminar:', error.message);
          }
        }
      });
    }
  }

  limpiarBusqueda() {
    this.nombreBusqueda = '';
    this.cursos = [];
  }
}
