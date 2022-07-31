import { Accessory, AccessoryType } from './types';
import { v1 as uuid } from 'uuid';

const data = [
  {
    name: 'Cinta de Papel Enmascarar 36 mm x 50 mts Doble AA',
    price: 799,
    discount: 10,
    description: 'Cinta de papel',
    images: ['/imgs/productos/accesorios/Accesorio-1.jpg'],
    brand: 'Doble A',
    type: 'cinta',
    amount: 15,
  },
  {
    name: 'Pincel Uso General N°20 Zonda',
    price: 1199,
    discount: 0,
    description: 'Pincel',
    images: ['/imgs/productos/accesorios/Accesorio-2.jpg'],
    brand: 'Zonda',
    type: 'pincel',
    amount: 15,
  },
  {
    name: 'Pincel Uso General N°30 Zonda',
    price: 100,
    discount: 10,
    description: 'Pincel',
    images: ['/imgs/productos/accesorios/Accesorio-3.jpg'],
    brand: 'Zonda',
    type: 'pincel',
    amount: 15,
  },
  {
    name: 'Tijera',
    price: 100,
    discount: 10,
    description: 'Tijera',
    images: ['/imgs/productos/accesorios/Accesorio-4.jpg'],
    brand: 'Alba',
    type: 'tijera',
    amount: 15,
  },
  {
    name: 'Tijera',
    price: 100,
    discount: 10,
    description: 'Tijera',
    images: ['/imgs/productos/accesorios/Accesorio-5.jpg'],
    brand: 'Alba',
    type: 'tijera',
    amount: 15,
  },
  {
    name: 'Tijera',
    price: 100,
    discount: 10,
    description: 'Tijera',
    images: ['/imgs/productos/accesorios/Accesorio-6.jpg'],
    brand: 'Alba',
    type: 'tijera',
    amount: 15,
  },
  {
    name: 'Tijera',
    price: 100,
    discount: 10,
    description: 'Tijera',
    images: ['/imgs/productos/accesorios/Accesorio-7.jpg'],
    brand: 'Alba',
    type: 'tijera',
    amount: 15,
  },
  {
    name: 'Tijera',
    price: 100,
    discount: 10,
    description: 'Tijera',
    images: ['/imgs/productos/accesorios/Accesorio-8.jpg'],
    brand: 'Alba',
    type: 'tijera',
    amount: 15,
  },
];

const accesorios: Accessory[] = data.map((accesorio) => ({
  ...accesorio,
  id: uuid(),
  category: 'accesorio',
  type: accesorio.type as AccessoryType,
}));

export default accesorios;
