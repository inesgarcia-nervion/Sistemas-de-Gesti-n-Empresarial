import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaViewModel } from '../../viewmodels/persona.viewmodel';

@Component({
  selector: 'persona-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './persona-edit.component.html'
})
export class PersonaEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  personaForm = new FormGroup({
    id: new FormControl(0),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required)
  });

  constructor(private vm: PersonaViewModel, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.vm.cargarPersonaPorId(id).subscribe((p) => {
        if (p) {
          this.personaForm.setValue({ id: p.id, nombre: p.nombre, apellidos: p.apellidos });
        }
      });
    }
  }

  onSubmit(): void {
    if (this.personaForm.valid) {
      const val: any = this.personaForm.value;
      const persona = { id: val.id, nombre: val.nombre, apellidos: val.apellidos, edad: 0, fechaNacimiento: new Date().toISOString(), direccion: '', telefono: '' };
      this.vm.editarPersona(persona as any);
      this.router.navigate(['/']);
    }
  }
}
