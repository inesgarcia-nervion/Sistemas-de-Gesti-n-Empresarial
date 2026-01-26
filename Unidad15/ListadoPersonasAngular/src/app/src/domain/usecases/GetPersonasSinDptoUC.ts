import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PersonaRepository } from '../../data/repositories/PersonaRepository';
import { Persona } from '../entities/Persona';
import { IGetPersonaSinDpto } from '../interfaces/IGetPersonaSinDpto';

@Injectable({ providedIn: 'root' })
export class GetPersonasSinDptoUC implements IGetPersonaSinDpto {
  constructor(private personaRepo: PersonaRepository) {}

  async Execute(): Promise<Persona[]> {
    const all = await firstValueFrom(this.personaRepo.getListaPersonasRep());
    return (all ?? []).map(p => p);
  }
}