export interface UserData {
  email: string;
  contrasena: string;
  nombre: string;
}

export interface TaskData {
  titulo: string;
  descripcion: string;
  presupuesto: number;
  plazo: Date;
  fechaPublicacion: Date;
  estadoTarea: string;
}
