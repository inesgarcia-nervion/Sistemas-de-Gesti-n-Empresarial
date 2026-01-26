import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../domain/entities/Persona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiUrlDataSource {
  private apiUrl = 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) {}

  private computeAge(dateStr?: string): number {
    if (!dateStr) return 0;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return 0;
    const diff = new Date(Date.now() - d.getTime());
    return Math.abs(diff.getUTCFullYear() - 1970);
  }

  getPersonas(): Observable<Persona[]> {
    // The API returns items like { persona: {...}, nombreDepartamento: '...' }
    // Map to Persona instances expected by the UI.
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((list) => (list ?? []).map((item) => {
        const p = item?.persona ?? item;
        const apellidos = p?.apellido ?? p?.apellidos ?? '';
        const fecha = p?.fechaNacimiento ?? '';
        const edad = this.computeAge(fecha);
        return new Persona(
          p?.id ?? 0,
          p?.nombre ?? '',
          apellidos,
          edad,
          fecha,
          p?.direccion ?? '',
          p?.telefono ?? '',
          p?.foto ?? null,
          p?.idDepartamento ?? null
        );
      }))
    );
  }
}