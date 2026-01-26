export interface Persona {
  id: number;
  nombre: string;
  apellidos: string;
  fechaNacimiento?: string;
  direccion?: string;
  telefono?: string;
  foto?: string | null;
  idDepartamento?: number | null;
}
