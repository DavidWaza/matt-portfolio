interface Profile {
  id: number;
  img: string;
  title: string;
  link: string;
  class: string;
}

export const profession: Profile[] = [
  {
    
    id: 1,
    img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1695062308/pexels-mati-mango-5952738_jyyxgo.jpg",
    title: "Data Engineering",
    link: "/data-engr",
    class: "class-burylwood",
  },
  // {
  //   id: 2,
  //   img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312962/diamond-ring_xdjpzy.jpg",
  //   title: "diamonds",
  //   link: "diamonds",
  //   class: "class-coal",
  // },
  {
    id: 3,
    img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312965/gemstone_aedeqn.jpg",
    title: "precious stones",
    link: "/precious-stones",
    class: "class-coffee",
  },
  // {
  //   id: 4,
  //   img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312965/e-commerce_cxlm0n.jpg",
  //   title: "e-commerce",
  //   link: "/e-commerce",
  //   class: "class-white",
  // },
  {
    id: 5,
    img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312966/matts_c3t2y8.jpg",
    title: "photography",
    link: "/photography",
    class: "class-burylwood",
  },
];

interface TestimonialProps {
  id: number;
  name: string;
  words: string;
  position:string
}

export const TestimonialWords: TestimonialProps[] = [
  {
    id: 1,
    name: "mister gamal",
    words: `I can't believe the results I've seen since using this product! It's like magic. My skin has never looked better. Thank you so much!`,
    position: "Lead Designer UI/UX"
  },
  {
    id: 2,
    name: "Gad Jacobs",
    words: `This website is a game-changer! The information I found here completely transformed my approach to fitness. I've never been in better shape.`,
    position:"Lead Front-end Developer, Acronix Studio"
  },
  {
    id: 3,
    name: "Nelson Atueowu",
    words: `"I was skeptical at first, but this service exceeded my expectations. The customer support is top-notch, and the results speak for themselves. Highly recommended`,
    position:"CEO/Lead Developer, GRIP"
  },
  {
    id: 4,
    name: "Idemeto Emediong",
    words: `I've tried many apps for productivity, but this one takes the cake. It's streamlined my work process and saved me so much time. I don't know how I ever lived without it.`,
    position:"Lead Front-end Developer, BINARY"
  },
  {
    id: 5,
    name: "ebute emmanuel",
    words: `The quality of the products on this online store is outstanding. I ordered a few items, and they arrived quickly and in perfect condition. I'll definitely be shopping here again.`,
    position: "Lead Social/Marketing Advocate"
  },
];
