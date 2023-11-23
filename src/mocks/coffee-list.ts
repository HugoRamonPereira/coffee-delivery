import ExpressoTradicional from '../assets/images/coffee-list/expresso-tradicional.svg';
import ExpressoAmericano from '../assets/images/coffee-list/expresso-americano.svg';
import ExpressoCremoso from '../assets/images/coffee-list/expresso-cremoso.svg';
import ExpressoGelado from '../assets/images/coffee-list/expresso-gelado.svg';
import CafeComLeite from '../assets/images/coffee-list/cafe-com-leite.svg';
import Latte from '../assets/images/coffee-list/latte.svg';
import Capuccino from '../assets/images/coffee-list/capuccino.svg';
import Macchiato from '../assets/images/coffee-list/machiato.svg';
import Mocaccino from '../assets/images/coffee-list/mocaccino.svg';
import ChocolateQuente from '../assets/images/coffee-list/chocolate-quente.svg';
import Cubano from '../assets/images/coffee-list/cubano.svg';
import Havaiano from '../assets/images/coffee-list/havaiano.svg';
import Arabe from '../assets/images/coffee-list/arabe.svg';
import Irlandes from '../assets/images/coffee-list/irlandes.svg';

export const coffeeList = [
  {
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['tradicional'],
    price: 9.9,
    image: { ExpressoTradicional }
  },
  {
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['tradicional'],
    price: 9.9,
    image: { ExpressoAmericano }
  },
  {
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['tradicional'],
    price: 9.9,
    image: { ExpressoCremoso }
  },
  {
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['tradicional', 'gelado'],
    price: 9.9,
    image: { ExpressoGelado }
  },
  {
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { CafeComLeite }
  },
  {
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { Latte }
  },
  {
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { Capuccino }
  },
  {
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { Macchiato }
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { Mocaccino }
  },
  {
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['tradicional', 'com leite'],
    price: 9.9,
    image: { ChocolateQuente }
  },
  {
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    image: { Cubano }
  },
  {
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['especial'],
    price: 9.9,
    image: { Havaiano }
  },
  {
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['especial'],
    price: 9.9,
    image: { Arabe }
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['especial', 'alcoólico'],
    price: 9.9,
    image: { Irlandes }
  }
];
