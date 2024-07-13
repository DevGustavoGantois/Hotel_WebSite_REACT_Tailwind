// rooms images
import Room1Img from './assets/img/rooms/1.png';
import Room1ImgLg from './assets/img/rooms/1-lg.png';
import Room2Img from './assets/img/rooms/2.png';
import Room2ImgLg from './assets/img/rooms/2-lg.png';
import Room3Img from './assets/img/rooms/3.png';
import Room3ImgLg from './assets/img/rooms/3-lg.png';
import Room4Img from './assets/img/rooms/4.png';
import Room4ImgLg from './assets/img/rooms/4-lg.png';
import Room5Img from './assets/img/rooms/5.png';
import Room5ImgLg from './assets/img/rooms/5-lg.png';
import Room6Img from './assets/img/rooms/6.png';
import Room6ImgLg from './assets/img/rooms/6-lg.png';
import Room7Img from './assets/img/rooms/7.png';
import Room7ImgLg from './assets/img/rooms/7-lg.png';
import Room8Img from './assets/img/rooms/8.png';
import Room8ImgLg from './assets/img/rooms/8-lg.png';

export const roomData = [
  {
    id: 1,
    name: 'Quarto Superior',
    description:
      'Confortável, elegante, com amenities premium.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Sala de assinatura',
    description:
      ' Suíte exclusiva, áreas separadas, concierge VIP.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Quarto de Luxo',
    description:
      'Cama king-size, spa privativo, vista incrível.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Quarto Deluxe',
    description:
      'Espaçoso, confortável, com TV HD e Wi-Fi.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee', },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Quarto Suíte de Luxo',
    description:
      'Espaçosa, sala de estar, jacuzzi, vistas panorâmicas.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Quarto de Luxo',
    description:
      'Decorado, cama king-size, spa privativo, vistas incríveis. Muito aconchegante',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath' },
      { name: 'Parking Space'},
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM', icon: 'FaStopwatch' },
      { name: 'Drinks' },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Quarto Deluxe',
    description:
      ' Espaçoso, confortável, com TV HD e Wi-Fi.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee',  },
      { name: 'Bath'},
      { name: 'Parking Space'},
      { name: 'Swimming Pool'},
      { name: 'Breakfast' },
      { name: 'GYM' },
      { name: 'Drinks' },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: 'Quarto Deluxe',
    description:
      'Espaçoso, confortável, com TV HD e Wi-Fi.',
    facilities: [
      { name: 'Wifi' },
      { name: 'Coffee'  },
      { name: 'Bath'},
      { name: 'Parking Space' },
      { name: 'Swimming Pool' },
      { name: 'Breakfast' },
      { name: 'GYM' },
      { name: 'Drinks' },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
];
