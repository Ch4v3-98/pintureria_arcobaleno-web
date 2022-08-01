import { Paint, PaintType } from './types';
import { v4 as uuid } from 'uuid';

const data = [
  {
    name: 'Latex Interior Albalatex Design Blanco Mate 20 Lts',
    price: 30534,
    discount: 10,
    description:
      '¡Las manchas en las paredes ya no son un problema! Látex para Interiores mate de alto desempeño y durabilidad. Gracias a su innovadora tecnología ultra resist, es 3 veces más resistente al lavado, antimanchas, repele líquidos y no deja aureola. Fácil de limpiar. Se aplica con pincel, rodillo o soplete.',
    images: ['/imgs/productos/pinturas/Pintura-Alba-Foto1.jpg'],
    brand: 'Alba',
    color: 'Mate blanco',
    capacity: 20,
    type: 'interior',
    amount: 15,
  },
  {
    name: 'Impermeabilizante Duralba Frentes y Muros 10 Lts Blanco Alba',
    price: 15454,
    discount: 10,
    description:
      'Impermeabilizante Elástomérico para Exteriores Mate. Con polímeros de gran elasticidad y óptima protección impermeabilizante. Película con alta resistencia al lavado y menor adherencia de la suciedad. Gran poder cubritivo e integridad de película. Todos los colores.',
    images: ['/imgs/productos/pinturas/Pintura-Alba-Foto2.jpg'],
    brand: 'Duralba',
    color: 'Blanco',
    capacity: 10,
    type: 'exterior',
    amount: 15,
  },
  {
    name: 'Impermeabilizante Duralba Techos 20 Lts Alba',
    price: 28634,
    discount: 10,
    description:
      'Membrana impermeabilizante para techos. Al secar forma una menbrana protectora impermeable, de gran adherencia, manteniendo una excelente elasticidad con el paso del tiempo y evitando la filtración de agua. Especialmente formulado para reducir la temperatura de las superficies donde se aplica, disminuyendo la transferencia de calor desde el exterior y mejorando la aislación térmica.',
    images: ['/imgs/productos/pinturas/Pintura-Alba-Foto3.jpg'],
    brand: 'Duralba',
    color: 'Blanco',
    capacity: 20,
    type: 'exterior',
    amount: 15,
  },
  {
    name: 'Latex Exterior Duralba Mate Blanco 4 Lts Alba',
    price: 6034,
    discount: 10,
    description:
      'Pintura de Base Acuosa para decoración y protección de muros en exteriores, con gran resistencia a la intemperie',
    images: ['/imgs/productos/pinturas/Pintura-Alba-Foto4.png'],
    brand: 'Duralba',
    color: 'Blanco',
    capacity: 4,
    type: 'exterior',
    amount: 15,
  },
  {
    name: 'Latex Interior Lavable Mate Blanco 20 Lts Tersuave',
    price: 28109,
    discount: 5,
    description:
      'Lavable Revestimiento Estirenado para Interiores está formulado con polímeros de última generación y pigmentos de alta calidad que le confieren una alta resistencia al frote por lavabilidad - sin aureolas -, poder cubritivo sin igual, bajo nivel de salpicado y facilidad de aplicación. La lavabilidad es una condición que este producto rescata, garantizando la sencilla remoción de manchas rebeldes y de difícil eliminación, a través de la cuidada selección de sus componentes, siendo especialmente indicado para el pintado de cuartos de niños, cocinas, pasillos y áreas de alto tránsito. USOS: Se aplica en interiores, sobre superficies de mampostería, ladrillos, revoque, hormigón visto, yeso, etc. sobre los que se haya aplicado el fondo adecuado. Su lavabilidad lo hace especialmente recomendado para cuartos de niños, pasillos, cocinas y áreas de alto tránsito.',
    images: ['/imgs/productos/pinturas/Pintura-Tersuave-20l.jpg'],
    brand: 'Tersuave',
    color: 'Blanco',
    capacity: 20,
    type: 'interior',
    amount: 22,
  },
  {
    name: 'Látex Cielorraso Mate Blanco 20 Lts Colorin',
    price: 14563.56,
    discount: 0,
    description:
      'Pintura de Base Acuosa y acabado mate y alta porosidad, especialmente preparada para evitar la condensación de humedad en techos de ambientes interiores, aditivado para evitar la formación de hongos. * El envase de presentación puede variar de acuerdo a la disponiblidad de entrega del proveedor.',
    images: ['/imgs/productos/pinturas/colorin-cieloraso-c.jpg'],
    brand: 'Colorin',
    color: 'Blanco',
    capacity: 20,
    type: 'cielorraso',
    amount: 54,
  },
  {
    name: 'Latex Interior Tersen Mate Blanco 20 Lts Tersuave',
    price: 26783,
    discount: 5,
    description:
      'Tersen Latex Interior Blanco ha sido desarrollado con la mas moderna tecnologia, polimeros y pigmentos de ultima generacion. El resultado es un recubrimiento de alto poder cubritivo, maxima resistencia y la mayor performance de rendimiento.',
    images: ['/imgs/productos/pinturas/Pintura-Terasuave-Mate.jpg'],
    brand: 'Tersuave',
    color: 'Blanco',
    capacity: 20,
    type: 'interior',
    amount: 34,
  },
  {
    name: 'Recuplast Frentes 20 Litros Impermeabilizante Sinteplast Blanco',
    price: 32535,
    discount: 0,
    description:
      'Recubrimiento acrílico para paredes exteriores, de base acuosa, con características de membrana líquida. Aplicado en el espesor recomendado, una vez seco, forma una película de gran elasticidad y alta resistencia a los factores climáticos, que impermeabiliza el sustrato en forma integral, ya que sella tanto la superficie del material como las pequeñas fisuras. Se aplica con mínimo salpicado y buena nivelación. Decora y cuida las paredes exteriores, con un potente anti hongo /anti algas y se mantiene elástico y resistente durante años. Al evitar filtraciones protege también los ambientes interiores',
    images: ['/imgs/productos/pinturas/Sinteplast-Blanco.jpg'],
    brand: 'Sinteplast',
    color: 'Blanco',
    capacity: 20,
    type: 'exterior',
    amount: 10,
  },
  {
    name: 'Látex Interior Performance Mate Blanco 20 Lts Casablanca',
    price: 22535,
    discount: 0,
    description:
      'Látex para paredes interiores de excepcional cubritivo y de gran resistencia a los lavados. Su acabado mate garantiza una excelente terminación con mínimo salpicado',
    images: ['/imgs/productos/pinturas/casablanca-performance-latex.jpg'],
    brand: 'Duralba',
    color: 'Blanco',
    capacity: 20,
    type: 'interior',
    amount: 15,
  },
  {
    name: 'Látex Interior Mate Profesional Sinteplast 4 Litros',
    price: 3645,
    discount: 0,
    description:
      'Producto apropiado para superficies de revoque, hormigón, ladrillos, bloques, paneles pre-construidos, etc. Especial para uso profesional por su poder cubriente y rendimiento.',
    images: ['/imgs/productos/pinturas/Sinteplast-Mate.jpg'],
    brand: 'Sinteplast',
    color: 'Mate',
    capacity: 4,
    type: 'interior',
    amount: 5,
  },
];

const pinturas: Paint[] = data.map((pintura) => ({
  ...pintura,
  id: uuid(),
  category: 'pintura',
  type: pintura.type as PaintType,
}));

export default pinturas;
