import productos from './productos';
import { Marca, Producto } from './types';

const filtrarProductos = (marca: string): Producto[] =>
  productos.filter((producto) => producto.marca === marca);

const marcas: Marca[] = [
  {
    id: 1,
    nombre: 'Alba',
    imagen: '/imgs/marcas/alba.png',
    productos: filtrarProductos('Alba'),
    tiposProductos: ['pintura'],
  },
  {
    id: 2,
    nombre: 'Sinteplast',
    imagen: '/imgs/marcas/sinteplast.png',
    productos: filtrarProductos('Sinteplast'),
    tiposProductos: ['pintura'],
  },
  {
    id: 3,
    nombre: 'Tersuave',
    imagen: '/imgs/marcas/tersuave.png',
    productos: filtrarProductos('Tersuave'),
    tiposProductos: ['pintura'],
  },
  {
    id: 5,
    nombre: 'Plavicon',
    imagen: '/imgs/marcas/plavicon.png',
    productos: filtrarProductos('Plavicon'),
    tiposProductos: ['pintura'],
  },
  {
    id: 4,
    nombre: 'El Galgo',
    imagen: '/imgs/marcas/elgalgo.png',
    productos: filtrarProductos('El Galgo'),
    tiposProductos: ['accesorio'],
  },
];

export default marcas;
