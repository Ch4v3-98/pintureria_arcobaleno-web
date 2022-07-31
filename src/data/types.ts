export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number; // %
  description: string;
  category: string;
  images: string[];
  brand: string;
  amount: number;
}

export interface Paint extends Product {
  color: string;
  capacity: number;
  type?: PaintType;
}

export const enum PaintType {
  Interior = 'interior',
  Exterior = 'exterior',
  Techos = 'techo',
  Piletas = 'piletas',
  Maderas = 'maderas',
  Pisos = 'pisos',
  Metales = 'metales',
  Ladrillos = 'ladrillos',
}

export interface Accessory extends Product {
  type: AccessoryType;
}

export const enum AccessoryType {
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

export interface Brand {
  id: string;
  name: string;
  image: string;
  products: Product[];
  productTypes: ProductType[];
}

export type ProductType = 'pintura' | 'accesorio';
