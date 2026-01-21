import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../../domain/entities/persona.model';

export interface IPersonaRepository {
  getListadoPersonas(): Observable<Persona[]>;
  getPersonaPorId(id: number): Observable<Persona | null>;
  insertarPersona(persona: Persona): Observable<number>;
  editarPersona(persona: Persona): Observable<number>;
  eliminarPersona(id: number): Observable<number>;
}

export const PERSONA_REPOSITORY_TOKEN = new InjectionToken<IPersonaRepository>('IPersonaRepository');
