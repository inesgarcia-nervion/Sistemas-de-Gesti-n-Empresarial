import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../../../src/domain/entities/persona';
import { PersonasService } from '../../../src/data/services/personas.service';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tabla-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-api.component.html',
  styleUrls: ['./tabla-api.component.css']
})
export class TablaAPIComponent implements OnInit {
  listadoPersonas: Persona[] = [];
  loading = false;

  constructor(private personasServicio: PersonasService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas(): void {
    this.loading = true;
    this.personasServicio.getPersonas().pipe(
      timeout(10000),
      catchError((err) => {
        console.error('Error en getPersonas pipe:', err);
        return of([] as any[]);
      })
    ).subscribe({
      next: (response) => {
        console.log('Respuesta getPersonas:', response);
        // The API returns items like { persona: {...}, nombreDepartamento: '...'}
        this.listadoPersonas = (response ?? []).map((item: any) => {
          const p = item?.persona ?? item;
          return {
            id: p?.id ?? 0,
            nombre: p?.nombre ?? '',
            apellidos: p?.apellido ?? p?.apellidos ?? '',
            fechaNacimiento: p?.fechaNacimiento ?? p?.fechaNac ?? '',
            direccion: p?.direccion ?? '',
            telefono: p?.telefono ?? '',
            foto: p?.foto ?? null,
            idDepartamento: p?.idDepartamento ?? null,
            nombreDepartamento: item?.nombreDepartamento ?? null
          } as Persona & { nombreDepartamento?: string };
        });
        this.loading = false;
        try { this.cdr.detectChanges(); } catch (e) { /* ignore */ }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error en suscripción getPersonas:', error);
        alert('Ha ocurrido un error al obtener los datos del servidor');
        try { this.cdr.detectChanges(); } catch (e) { /* ignore */ }
      }
    });
  }

  trackById(index: number, persona: Persona): number {
    return persona.id;
  }
}
