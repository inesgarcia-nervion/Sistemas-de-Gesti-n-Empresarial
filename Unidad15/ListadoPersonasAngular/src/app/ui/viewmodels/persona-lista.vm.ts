import { makeAutoObservable, runInAction } from 'mobx';
import { Injectable } from '@angular/core';
import { GetPersonasSinDptoUC } from '../../src/domain/usecases/GetPersonasSinDptoUC';
import type { IGetPersonaSinDpto } from '../../src/domain/interfaces/IGetPersonaSinDpto';
import { Persona } from '../../src/domain/entities/Persona';

@Injectable()
export default class PersonaListaVM {
  private _personasList: Persona[] = [];
  private _personaSeleccionada: Persona | null = null;
  private _cargando = true;
  private _error: string | null = null;

  constructor(private getPersonasSinDptoUC: GetPersonasSinDptoUC) {
    makeAutoObservable(this);
    void this.loadPersonas();
  }

  async loadPersonas(): Promise<void> {
    try {
      this._cargando = true;
      this._error = null;
      const list = await this.getPersonasSinDptoUC.Execute();
      runInAction(() => {
        this._personasList = list;
        this._cargando = false;
      });
    } catch (error) {
      runInAction(() => {
        this._error = (error as Error).message || 'Error cargando personas';
        this._cargando = false;
      });
    }
  }

  get cargando(): boolean { return this._cargando; }
  get error(): string | null { return this._error; }
  get personaSeleccionada(): Persona | null { return this._personaSeleccionada; }
  set personaSeleccionada(persona: Persona | null) { this._personaSeleccionada = persona; }
  get personasList(): Persona[] { return this._personasList; }
}