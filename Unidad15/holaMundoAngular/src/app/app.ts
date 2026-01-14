import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TablaPersonas } from "./components/tabla-personas/tabla-personas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaPersonas, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('holaMundoAngular');
}
