import { injectable, inject } from 'inversify';
import { ApiUrlDataSource } from '../datasource/ApiUrl';
import { Persona } from '../../domain/entities/Persona';
import { Observable } from 'rxjs';

@injectable()
export class PersonaRepository {
  constructor(
    @inject(ApiUrlDataSource) private dataSource: ApiUrlDataSource
  ) {}

  getListaPersonasRep(): Observable<Persona[]> {
    return this.dataSource.getPersonas();
  }
}