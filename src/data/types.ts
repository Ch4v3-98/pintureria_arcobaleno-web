export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento: number; // %
  descripcion: string;
  categoria: string;
  imagenes: string[];
  marca: string;
  cantidad: number;
}

export interface Pintura extends Producto {
  color: string;
  capacidad: number; // Litros, ml, etc
  tipo?: TipoPintura;
}

export const enum TipoPintura {
  Interior = 'interior',
  Exterior = 'exterior',
  Techos = 'techo',
  Piletas = 'piletas',
  Maderas = 'maderas',
  Pisos = 'pisos',
  Metales = 'metales',
  Ladrillos = 'ladrillos',
}

export interface Accesorio extends Producto {
  tipo: TipoAccesorio;
}

export const enum TipoAccesorio {
  Pincel = 'pincel',
  Rodillo = 'rodillo',
  Escaleras = 'escaleras',
  Lijas = 'lijas',
  Cintas = 'cintas',
  Adhesivos = 'adhesivos',
  RopaDeTrabajo = 'ropa de trabajo',
  Fratachos = 'fratachos',
  Cepillos = 'cepillos',
}

export interface Marca {
  id: number;
  nombre: string;
  imagen: string;
  productos: Producto[];
  tiposProductos: TipoProducto[];
}

export type TipoProducto = 'pintura' | 'accesorio';
