import { Injectable } from '@angular/core';
import { PersonaRepository } from '../../../src/data/repositories/PersonaRepository';
import { Persona } from '../../domain/entities/Persona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetPersonasSinDptoUC {
  constructor(private personaRepo: PersonaRepository) {}

  Execute(): Observable<Persona[]> {
    return this.personaRepo.getListaPersonasRep().pipe(
      map(personas => personas.filter(p => !p.idDepartamento))
    );
  }
}