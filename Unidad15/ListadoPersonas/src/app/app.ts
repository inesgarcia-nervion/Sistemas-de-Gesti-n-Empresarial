import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaViewModel } from './presentation/personas/viewmodels/persona.viewmodel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [PersonaViewModel],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ListadoPersonas');
}
