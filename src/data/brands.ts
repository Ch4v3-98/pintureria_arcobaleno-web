import productos from './products';
import { Brand, Product, ProductType } from './types';
import { v1 as uuid } from 'uuid';

const filtrarProductos = (marca: string): Product[] =>
  productos.filter((producto) => producto.brand === marca);

const data = [
  {
    name: 'Alba',
    image: '/imgs/marcas/alba.png',
    products: filtrarProductos('Alba'),
    productTypes: ['pintura'],
  },
  {
    name: 'Sinteplast',
    image: '/imgs/marcas/sinteplast.png',
    products: filtrarProductos('Sinteplast'),
    productTypes: ['pintura'],
  },
  {
    name: 'Tersuave',
    image: '/imgs/marcas/tersuave.png',
    products: filtrarProductos('Tersuave'),
    productTypes: ['pintura'],
  },
  {
    name: 'Plavicon',
    image: '/imgs/marcas/plavicon.png',
    products: filtrarProductos('Plavicon'),
    productTypes: ['pintura'],
  },
  {
    name: 'El Galgo',
    image: '/imgs/marcas/elgalgo.png',
    products: filtrarProductos('El Galgo'),
    productTypes: ['accesorio'],
  },
  {
    name: 'Cetol',
    image: '/imgs/marcas/cetol.png',
    products: filtrarProductos('Cetol'),
    productTypes: ['accesorio'],
  },
  {
    name: 'Colorin',
    image: '/imgs/marcas/colorin.png',
    products: filtrarProductos('Colorin'),
    productTypes: ['pintura'],
  },
  {
    name: 'Merclin',
    image: '/imgs/marcas/merclin.png',
    products: filtrarProductos('Merclin'),
    productTypes: ['pintura'],
  },
  {
    name: 'Polilak',
    image: '/imgs/marcas/polilak.png',
    products: filtrarProductos('Polilak'),
    productTypes: ['pintura'],
  },
  {
    name: 'Rosarpin',
    image: '/imgs/marcas/rosarpin.png',
    products: filtrarProductos('Rosarpin'),
    productTypes: ['pintura'],
  },
];

const marcas: Brand[] = data.map((marca) => ({
  ...marca,
  id: uuid(),
  productTypes: marca.productTypes as ProductType[],
}));

export default marcas;
