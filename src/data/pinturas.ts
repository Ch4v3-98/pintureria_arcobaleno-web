import { Pintura, TipoPintura } from './types';

const data = [
  {
    id: 1,
    nombre: 'Latex Interior Albalatex Design Blanco Mate 20 Lts',
    precio: 1999,
    descuento: 0,
    descripcion: 'Pintura 1',
    categoria: 'Pintura',
    imagenes: [
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
    ],
    marca: 'Alba',
    color: 'Mate blanco',
    capacidad: 20,
    tipo: 'interior',
    cantidad: 15,
  },
  {
    id: 2,
    nombre: 'Pintura 2',
    precio: 100,
    descuento: 10,
    descripcion: 'Pintura 2',
    categoria: 'Pintura',
    imagenes: [
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
      'https://www.pinturas-y-pisos.com/wp-content/uploads/2019/01/pintura-1.jpg',
    ],
    marca: 'Alba',
    color: 'Mate blanco',
    capacidad: 10,
    tipo: 'interior',
    cantidad: 15,
  },
];

const pinturas: Pintura[] = data.map((pintura) => ({
  ...pintura,
  tipo: pintura.tipo as TipoPintura,
}));

export default pinturas;
