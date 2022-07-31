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
    price: 358.5,
    discount: 10,
    description: 'Pincel',
    images: ['/imgs/productos/accesorios/Accesorio-3.jpg'],
    brand: 'Zonda',
    type: 'pincel',
    amount: 15,
  },
  {
    name: 'Mini Rodillo Espuma Zonda 4" + 1 Repuesto',
    price: 2583.66,
    discount: 10,
    description: 'Mini Rodillo Espuma Zonda 4" + 1 Repuesto',
    images: ['/imgs/productos/accesorios/Accesorio-4.jpg'],
    brand: 'Zonda',
    type: 'rodillo',
    amount: 20,
  },
  {
    name: 'Rodillo Multiuso Súper 22 Cm Wolly',
    price: 953.54,
    discount: 5,
    description: 'Rodillo Multiuso Súper 22 Cm Wolly',
    images: ['/imgs/productos/accesorios/Accesorio-5.jpg'],
    brand: 'Woolly',
    type: 'rodillo',
    amount: 30,
  },
  {
    name: 'Lija Al Agua Nro. 180 AA',
    price: 145.55,
    discount: 10,
    description: 'Lija Al Agua Nro. 180 AA',
    images: ['/imgs/productos/accesorios/Accesorio-6.jpg'],
    brand: 'Doble A',
    type: 'lija',
    amount: 15,
  },
  {
    name: 'Lija Para Masilla N° 80 Doble A',
    price: 165.5,
    discount: 10,
    description: 'Lija Para Masilla N° 80 Doble A',
    images: ['/imgs/productos/accesorios/Accesorio-7.jpg'],
    brand: 'Doble A',
    type: 'lija',
    amount: 50,
  },
  {
    name: 'Combo Pincel Zonda 3 Pinceles N° 15 20 y 30',
    price: 2730.3,
    discount: 10,
    description: 'Combo de Pincel Zonda 3 Pinceles N° 15 20 y 30',
    images: ['/imgs/productos/accesorios/Accesorio-8.jpg'],
    brand: 'Zonda',
    type: 'pincel',
    amount: 5,
  },
];

const accesorios: Accessory[] = data.map((accesorio) => ({
  ...accesorio,
  id: uuid(),
  category: 'accesorio',
  type: accesorio.type as AccessoryType,
}));

export default accesorios;
