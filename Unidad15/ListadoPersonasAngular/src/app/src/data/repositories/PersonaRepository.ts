import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../../domain/entities/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRepository {
  private apiUrl = 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) {}

  getListaPersonasRep(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }
}