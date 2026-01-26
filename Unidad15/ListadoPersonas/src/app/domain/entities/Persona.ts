export class Persona {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public edad: number,
    public fechaNacimiento: string,
    public direccion: string,
    public telefono: string,
    public foto?: string | null,
    public idDepartamento?: number | null
  ) {}
}
