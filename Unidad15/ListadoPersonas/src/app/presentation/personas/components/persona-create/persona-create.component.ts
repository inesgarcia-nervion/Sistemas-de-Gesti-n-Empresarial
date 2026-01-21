import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaViewModel } from '../../viewmodels/persona.viewmodel';

@Component({
  selector: 'persona-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './persona-create.component.html'
})
export class PersonaCreateComponent {
  personaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required)
  });

  constructor(private vm: PersonaViewModel, private router: Router) {}

  onSubmit(): void {
    if (this.personaForm.valid) {
      const val = this.personaForm.value as any;
      const persona = {
        id: 0,
        nombre: val.nombre,
        apellidos: val.apellidos,
        edad: 0,
        fechaNacimiento: new Date().toISOString(),
        direccion: '',
        telefono: ''
      };
      this.vm.insertarPersona(persona as any as any);
      this.router.navigate(['/']);
    }
  }
}
