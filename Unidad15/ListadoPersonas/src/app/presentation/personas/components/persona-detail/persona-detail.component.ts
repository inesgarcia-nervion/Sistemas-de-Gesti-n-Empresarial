import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PersonaViewModel } from '../../viewmodels/persona.viewmodel';

@Component({
  selector: 'persona-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona-detail.component.html'
})
export class PersonaDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  constructor(public vm: PersonaViewModel) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) this.vm.cargarPersonaPorId(id);
  }
}
