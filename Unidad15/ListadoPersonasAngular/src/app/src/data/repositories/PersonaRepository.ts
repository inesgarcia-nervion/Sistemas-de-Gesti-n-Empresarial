import { Injectable } from '@angular/core';
import { ApiUrlDataSource } from '../datasource/ApiUrl';
import { Persona } from '../../domain/entities/Persona';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonaRepository {
  constructor(private dataSource: ApiUrlDataSource) {}

  getListaPersonasRep(): Observable<Persona[]> {
    return this.dataSource.getPersonas();
  }
}