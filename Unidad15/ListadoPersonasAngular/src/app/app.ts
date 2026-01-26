import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  readonly title = signal('ListadoPersonasAngular');
  today = new Date();

  reloadPage() {
    window.location.reload();
  }
}