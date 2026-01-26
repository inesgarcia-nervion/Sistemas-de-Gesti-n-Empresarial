import { injectable } from 'inversify';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../domain/entities/Persona';
import { Observable } from 'rxjs';

@injectable()
export class ApiUrlDataSource {
  private apiUrl = 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }
}