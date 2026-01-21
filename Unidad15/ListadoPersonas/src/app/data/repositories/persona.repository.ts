import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPersonaRepository } from '../interfaces/repositories/ipersona.repository';
import { Persona } from '../../domain/entities/persona.model';

@Injectable()
export class MockPersonaRepository implements IPersonaRepository {
  // Private in-memory store (mock "database")
  private listaPersonas: Persona[] = [
    { id: 1, nombre: 'Inés', apellidos: 'García', edad: 30, fechaNacimiento: new Date().toISOString(), direccion: '', telefono: '' },
    { id: 2, nombre: 'Ángela', apellidos: 'García', edad: 28, fechaNacimiento: new Date().toISOString(), direccion: '', telefono: '' }
  ];

  getListadoPersonas(): Observable<Persona[]> {
    return of(this.listaPersonas.slice());
  }

  getPersonaPorId(id: number): Observable<Persona | null> {
    const p = this.listaPersonas.find(x => x.id === id) || null;
    return of(p);
  }

  insertarPersona(persona: Persona): Observable<number> {
    const nextId = this.listaPersonas.length ? Math.max(...this.listaPersonas.map(p => p.id)) + 1 : 1;
    this.listaPersonas.push({ ...persona, id: nextId });
    return of(nextId);
  }

  editarPersona(persona: Persona): Observable<number> {
    const idx = this.listaPersonas.findIndex(p => p.id === persona.id);
    if (idx === -1) return of(-1);
    this.listaPersonas[idx] = { ...persona };
    return of(persona.id);
  }

  eliminarPersona(id: number): Observable<number> {
    const idx = this.listaPersonas.findIndex(p => p.id === id);
    if (idx === -1) return of(-1);
    this.listaPersonas.splice(idx, 1);
    return of(id);
  }
}
