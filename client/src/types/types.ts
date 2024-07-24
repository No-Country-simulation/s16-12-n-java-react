export interface UserData {
  email: string;
  contrasena: string;
  nombre: string;
  confirmPassword: string;
}

export interface TaskData {
  titulo: string;
  descripcion: string;
  presupuesto: number;
  imagenUrl: string;
  plazo: Date;
  nombreCategoria: string;
  nombreHabilidades: string[];
}

export interface Contratador {
  id: number;
  nombre: string;
  email: string;
}

export interface TaskResponseData {
  id: number;
  titulo: string;
  descripcion: string;
  presupuesto: number;
  imagenUrl: string;
  plazo: string;
  fechaPublicacion: string;
  estadoTarea: string;
  categoria: string;
  contratador: Contratador;
  freelance: any;
  habilidades: string[];
}

export interface PaginatedResponse {
  content: TaskResponseData[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
