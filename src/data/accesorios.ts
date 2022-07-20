import { Accesorio, TipoAccesorio } from './types';

const data = [
  {
    id: 1,
    nombre: 'Pincel',
    precio: 100,
    descuento: 10,
    descripcion: 'Pincel',
    categoria: 'Accesorio',
    imagenes: [
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
    ],
    marca: 'Alba',
    tipo: 'pincel',
    cantidad: 15,
  },
  {
    id: 2,
    nombre: 'Rodillo',
    precio: 100,
    descuento: 10,
    descripcion: 'Rodillo',
    categoria: 'Accesorio',
    imagenes: [
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
    ],
    marca: 'Alba',
    tipo: 'rodillo',
    cantidad: 15,
  },
  {
    id: 3,
    nombre: 'Tijera',
    precio: 100,
    descuento: 10,
    descripcion: 'Tijera',
    categoria: 'Accesorio',
    imagenes: [
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
    ],
    marca: 'Alba',
    tipo: 'tijera',
    cantidad: 15,
  },
];

const accesorios: Accesorio[] = data.map((accesorio) => ({
  ...accesorio,
  tipo: accesorio.tipo as TipoAccesorio,
}));

export default accesorios;
