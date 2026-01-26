import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Persona } from '../../domain/entities/persona';

@Injectable({ providedIn: 'root' })
export class PersonasService {
  private apiUrl = 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net/api/personas';

  private http = inject(HttpClient);

  getPersonas(): Observable<Persona[]> {
    // Map API response which returns items like { persona: {...}, nombreDepartamento: '...'}
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((list) => (list ?? []).map((item) => {
        const p = item?.persona ?? item;
        return {
          id: p?.id ?? 0,
          nombre: p?.nombre ?? '',
          apellidos: p?.apellido ?? p?.apellidos ?? '',
          fechaNacimiento: p?.fechaNacimiento ?? '',
          direccion: p?.direccion ?? '',
          telefono: p?.telefono ?? '',
          foto: p?.foto ?? null,
          idDepartamento: p?.idDepartamento ?? null,
          nombreDepartamento: item?.nombreDepartamento ?? null
        } as Persona & { nombreDepartamento?: string };
      }))
    );
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  updatePersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
