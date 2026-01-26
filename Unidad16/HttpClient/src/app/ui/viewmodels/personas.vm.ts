import { makeAutoObservable, runInAction } from 'mobx';
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Persona } from '../../src/domain/entities/persona';

@Injectable()
export class PersonasViewModel {
  personas: Persona[] = [];
  cargando = false;
  error: string | null = null;

  private apiUrl = 'https://ines-frhqgndaghcnfpds.italynorth-01.azurewebsites.net/api/personas';

  constructor(private http: HttpClient, private ngZone: NgZone) {
    makeAutoObservable(this);
    void this.loadPersonas();
  }

  async loadPersonas(): Promise<void> {
    try {
      this.cargando = true;
      this.error = null;
      const list = await firstValueFrom(this.http.get<Persona[]>(this.apiUrl));
      this.ngZone.run(() => runInAction(() => {
        this.personas = list ?? [];
        this.cargando = false;
      }));
    } catch (err) {
      this.ngZone.run(() => runInAction(() => {
        this.error = (err as Error).message || 'Error cargando personas';
        this.cargando = false;
      }));
    }
  }
}
