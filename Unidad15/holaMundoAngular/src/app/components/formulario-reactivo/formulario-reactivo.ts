import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrls: ['./formulario-reactivo.css'],
})
export class FormularioReactivo implements OnInit {
  formulario!: FormGroup;
  submitted = false;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  saluda(){
    this.submitted = true;
    console.log('saluda(): valid=', this.formulario.valid, 'value=', this.formulario.value, 'nombre.errors=', this.formulario.get('nombre')?.errors, 'apellidos.errors=', this.formulario.get('apellidos')?.errors, 'submitted=', this.submitted);
    if (this.formulario.valid){
      const nombre = this.formulario.get('nombre')?.value || '';
      const apellidos = this.formulario.get('apellidos')?.value || '';
      alert('Hola ' + nombre + ' ' + apellidos);
      this.submitted = false;
    } else {
      this.formulario.markAllAsTouched();
      // Mostrar alerta si hay campos vacíos o inválidos
      alert('Por favor, rellena los campos obligatorios.');
    }
  }
}
