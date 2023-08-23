export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    src:string;
  }
  
  export const products = [
    {
        id: 1,
        name: 'Jack, the Pizza Raccoon',
        price: 799,
        description: 'Experience the ultimate in mobile entertainment with Jack, the Pizza Raccoon. Indulge in a stunning display and satisfy your cravings for top-tier technology.',
        src:"./assets/img/jacke the pizza boi.jpg",
      },
      {
        id: 2,
        name: 'Wizardo, the magic Raccoon',
        price: 100,
        description: 'Meet Wizardo, the enchanting raccoon with a touch of magic. This whimsical creature combines the mischievous spirit of a raccoon with the mystique of spellcasting.',
        src:"./assets/img/wizard racoon.jpg",

      },
      {
        id: 3,
        name: 'Pablito, racoon muy gordito',
        price: 299,
        description: 'Pablito is an irresistibly charming, affectionate, and friendly raccoon. An adorable companion.',
        src:"./assets/img/racoon gordido.jpg"
      },
      {
        id: 4,
        name: 'Claudia, sleepe girl ',
        price: 450,
        description: 'Claudia, the sleepy girl, is a calm and peaceful presence that can be yours.',
        src:"./assets/img/racoon sleepe boi.jpg"
      },
      {
        id: 5,
        name: 'Alberta, the perfect idiot',
        price: 10,
        description: 'This endearing image portrays Alberta carefree slumber in an adorable and candid manner.',
        src:"./assets/img/Wacoon.jpg"
      },
      {
        id: 6,
        name: 'Ionnino, the videogamer ',
        price: 389,
        description: 'With lightning-fast reflexes and unmatched strategic skills, Ionnino conquers virtual realms like no other. This artwork celebrates the dedication and passion that define a professional gamers journey.',
        src:"./assets/img/naonanoman.jpg"
      }
  ];
  