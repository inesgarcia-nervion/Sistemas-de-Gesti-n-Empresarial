import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-persona',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './formulario-persona.html',
  styleUrls: ['./formulario-persona.css'],
})
export class FormularioPersona {}
