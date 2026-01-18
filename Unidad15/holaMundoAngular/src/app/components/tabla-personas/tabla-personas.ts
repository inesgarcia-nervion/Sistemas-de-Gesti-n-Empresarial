import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para que funcione *ngFor 
import { RouterLink } from '@angular/router';

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-tabla-personas',
  imports: [CommonModule, RouterLink],
  templateUrl: './tabla-personas.html',
  styleUrl: './tabla-personas.css',
})
export class TablaPersonas {
  personas: Persona[] = [
      { id: 1, nombre: 'Inés', apellido: 'García' },
      { id: 2, nombre: 'Ángela', apellido: 'García' },
      { id: 3, nombre: 'Dylan', apellido: 'Cano' }
    ];
}
