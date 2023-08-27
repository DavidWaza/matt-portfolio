interface Profile {
  id: number;
  img: string;
  title: string;
  link:string;
  class: string;
}

export const profession: Profile[] = [
  {
    id: 1,
    img: "/assets/matts.jpg",
    title: "photography",
    link: '/photography',
    class: "class-burylwood",
  },
  {
    id: 1,
    img: "/assets/diamond-ring.jpg",
    title: "diamonds",
    link:'diamonds',
    class: "class-coal",
  },
  {
    id: 1,
    img: "/assets/gemstone.jpg",
    title: "precious stones",
    link:'/precious-stones',
    class: "class-coffee",
  },
  {
    id: 1,
    img: "/assets/e-commerce.jpg",
    title: "e-commerce",
    link:'/e-commerce',
    class: "class-white",
  },
  {
    id: 1,
    img: "/assets/frontend.jpg",
    title: "website development",
    link:'web-dev',
    class: "class-white",
  },
];
