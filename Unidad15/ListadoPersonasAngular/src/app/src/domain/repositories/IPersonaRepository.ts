import { Observable } from 'rxjs';
import { Persona } from '../entities/Persona';

export interface IPersonaRepository {
  getListaPersonasRep(): Observable<Persona[]>;
}