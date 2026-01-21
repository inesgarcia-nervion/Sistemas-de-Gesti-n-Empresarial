import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaViewModel } from '../../viewmodels/persona.viewmodel';

@Component({
  selector: 'persona-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-list.component.html'
})
export class PersonaListComponent implements OnInit {
  constructor(public vm: PersonaViewModel) {}

  ngOnInit(): void {
    this.vm.cargarListadoPersonas();
  }
}
