import { Component, OnInit } from '@angular/core';
import { PersonaListaVM } from '../../viewmodels/persona-lista.vm';
import { Persona } from '../../../src/domain/entities/Persona';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.scss'],
  providers: [PersonaListaVM]
})
export class PersonaListaComponent implements OnInit {
  constructor(public vm: PersonaListaVM) {}

  ngOnInit(): void {
    this.vm.loadPersonas();
  }

  seleccionarPersona(persona: Persona): void {
    this.vm.seleccionarPersona(persona);
  }

  limpiarSeleccion(): void {
    this.vm.limpiarSeleccion();
  }
}