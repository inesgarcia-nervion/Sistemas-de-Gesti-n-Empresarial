import { Observable } from 'rxjs';
import { Persona } from '../entities/Persona';

export interface IGetPersonaSinDpto {
  Execute(): Promise<Persona[]>;
}