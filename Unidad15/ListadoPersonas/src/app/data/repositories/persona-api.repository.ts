import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonaRepository } from '../interfaces/repositories/ipersona.repository';
import { Persona } from '../../domain/entities/persona.model';
import { ConnectionService } from '../../core/services/connection.service';

@Injectable()
export class PersonaApiRepository implements IPersonaRepository {
  private baseUrl: string;

  constructor(private http: HttpClient, private conn: ConnectionService) {
    this.baseUrl = this.conn.getConnectionString();
  }

  getListadoPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.baseUrl}/api/personas`);
  }

  getPersonaPorId(id: number): Observable<Persona | null> {
    return this.http.get<Persona>(`${this.baseUrl}/api/personas/${id}`);
  }

  insertarPersona(persona: Persona): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/api/personas`, persona);
  }

  editarPersona(persona: Persona): Observable<number> {
    return this.http.put<number>(`${this.baseUrl}/api/personas/${persona.id}`, persona);
  }

  eliminarPersona(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/api/personas/${id}`);
  }
}
