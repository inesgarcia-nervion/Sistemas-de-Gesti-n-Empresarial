import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para que funcione *ngFor 
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-tabla-personas',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './tabla-personas.html',
  styleUrls: ['./tabla-personas.css'],
})
export class TablaPersonas {
  personas: Persona[] = [
      { id: 1, nombre: 'Inés', apellido: 'García' },
      { id: 2, nombre: 'Ángela', apellido: 'García' },
      { id: 3, nombre: 'Dylan', apellido: 'Cano' }
    ];
}
