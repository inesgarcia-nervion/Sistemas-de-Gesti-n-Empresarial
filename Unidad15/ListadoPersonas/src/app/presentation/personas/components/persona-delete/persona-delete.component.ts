import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaViewModel } from '../../viewmodels/persona.viewmodel';

@Component({
  selector: 'persona-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-delete.component.html'
})
export class PersonaDeleteComponent implements OnInit {
  private route = inject(ActivatedRoute);
  constructor(public vm: PersonaViewModel, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) this.vm.cargarPersonaPorId(id);
  }

  onConfirm(): void {
    const id = this.vm.personaSeleccionada() ? this.vm.personaSeleccionada()!.id : -1;
    if (id !== -1) {
      this.vm.eliminarPersona(id);
      this.router.navigate(['/']);
    }
  }
}
