import { Injectable } from '@angular/core';
import { GetPersonasSinDptoUC } from '../../src/domain/usecases/GetPersonasSinDptoUC';
import { Persona } from '../../src/domain/entities/Persona';

@Injectable()
export class PersonaListaVM {
  personasList: Persona[] = [];
  personaSeleccionada: Persona | null = null;
  cargando = false;
  error: string | null = null;

  constructor(private getPersonasSinDptoUC: GetPersonasSinDptoUC) {}

  loadPersonas(): void {
    this.cargando = true;
    this.error = null;
    
    this.getPersonasSinDptoUC.Execute().subscribe({
      next: (list) => {
        this.personasList = list;
        this.cargando = false;
      },
      error: (err) => {
        this.error = err.message || 'Error cargando personas';
        this.cargando = false;
      }
    });
  }

  get personasListGet(): Persona[] {
    return this.personasList;
  }

  get cargandoGet(): boolean {
    return this.cargando;
  }

  get errorGet(): string | null {
    return this.error;
  }

  get personaSeleccionadaGet(): Persona | null {
    return this.personaSeleccionada;
  }

  set personaSeleccionadaSet(value: Persona | null) {
    this.personaSeleccionada = value;
  }

  seleccionarPersona(persona: Persona): void {
    this.personaSeleccionada = persona;
  }

  limpiarSeleccion(): void {
    this.personaSeleccionada = null;
  }
}