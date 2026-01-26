import { injectable, inject } from 'inversify';
import { TYPES } from '../../core/types';
import { IPersonaRepository } from '../repositories/IPersonaRepository';
import { Persona } from '../entities/Persona';
import { IGetPersonaSinDpto } from '../interfaces/IGetPersonaSinDpto';

@injectable()
export class GetPersonasSinDptoUC implements IGetPersonaSinDpto {
  constructor(
    @inject(TYPES.IPersonaRepository)
    private personaRepo: IPersonaRepository
  ) {}

  async Execute(): Promise<Persona[]> {
    const all = await this.personaRepo.getListaPersonasRep().toPromise();
    return (all ?? [])
      .map(p => p);
  }
}