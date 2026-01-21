import { Injectable, inject } from '@angular/core';
import { signal, WritableSignal } from '@angular/core';
import { PersonaApiRepository } from '../../../data/repositories/persona-api.repository';
import { Persona } from '../../../domain/entities/persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaViewModel {
  // Inject the concrete API repository directly as requested.
  private repo = inject(PersonaApiRepository);

  personas: WritableSignal<Persona[]> = signal<Persona[]>([]);
  personaSeleccionada: WritableSignal<Persona | null> = signal<Persona | null>(null);
  loading: WritableSignal<boolean> = signal<boolean>(false);
  error: WritableSignal<string | null> = signal<string | null>(null);

  cargarListadoPersonas(): Observable<Persona[]> {
    this.loading.set(true);
    const obs = this.repo.getListadoPersonas();
    obs.subscribe({
      next: (list: Persona[]) => { this.personas.set(list); this.loading.set(false); },
      error: (err: any) => { this.error.set(String(err)); this.loading.set(false); }
    });
    return obs;
  }

  cargarPersonaPorId(id: number): Observable<Persona | null> {
    this.loading.set(true);
    const obs = this.repo.getPersonaPorId(id);
    obs.subscribe({
      next: (p: Persona | null) => { this.personaSeleccionada.set(p); this.loading.set(false); },
      error: (err: any) => { this.error.set(String(err)); this.loading.set(false); }
    });
    return obs;
  }

  insertarPersona(persona: Persona): void {
    this.repo.insertarPersona(persona).subscribe();
  }

  editarPersona(persona: Persona): void {
    this.repo.editarPersona(persona).subscribe();
  }

  eliminarPersona(id: number): void {
    this.repo.eliminarPersona(id).subscribe();
  }
}
