import { Routes } from '@angular/router';
import { TablaPersonas } from './components/tabla-personas/tabla-personas';
import { FormularioPersona } from './components/formulario-persona/formulario-persona';
import { FormularioReactivo } from './components/formulario-reactivo/formulario-reactivo';

export const routes: Routes = [
	{ path: '', redirectTo: 'tabla', pathMatch: 'full' },				// Ruta por defecto (ahora es tabla de personas)
	{ path: 'tabla', component: TablaPersonas },
	{ path: 'formulario', component: FormularioPersona },
	{ path: 'formulario-reactivo', component: FormularioReactivo }
];
