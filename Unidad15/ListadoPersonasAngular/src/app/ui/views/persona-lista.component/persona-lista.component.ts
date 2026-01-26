import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import PersonaListaVM from '../../viewmodels/persona-lista.vm';
import { Persona } from '../../../src/domain/entities/Persona';

@Component({
  selector: 'app-persona-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css'],
  providers: [PersonaListaVM]
})
export class PersonaListaComponent implements OnInit {
  constructor(public vm: PersonaListaVM) {}

  ngOnInit(): void {
    this.vm.loadPersonas();
  }

  seleccionarPersona(persona: Persona): void {
    this.vm.personaSeleccionada = persona;
  }

  limpiarSeleccion(): void {
    this.vm.personaSeleccionada = null;
  }
}