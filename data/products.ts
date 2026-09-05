export type Colourway = {
  id: string;
  name: string;
  token: string;
  image?: string;
};
export type ProductAvailability =
  | { status: 'coming-soon' }
  | {
      status: 'preorder';
      price: number;
      currency: string;
      preorderUrl: string;
    };
export type AnatomyPoint = {
  label: string;
  x: number;
  y: number;
  side: 'left' | 'right';
};
export type Product = {
  slug: string;
  number: string;
  drop: string;
  name: string;
  shortName: string;
  statement: string;
  description: string;
  story: string;
  image: string;
  imageAlt: string;
  availability: ProductAvailability;
  colourways: Colourway[];
  anatomy: AnatomyPoint[];
  detailTopics: { title: string; text: string }[];
  comparison?: { feature: string; ovrld: string; basic: string }[];
  howTo?: {
    title: string;
    description: string;
    media?: { image: string; alt: string; webm?: string; mp4?: string };
  }[];
};
export const colourways: Colourway[] = [
  { id: 'black', name: 'Black', token: '--colour-black' },
  { id: 'grey', name: 'Grey', token: '--colour-grey' },
  { id: 'brown', name: 'Brown', token: '--colour-brown' },
  { id: 'pink', name: 'Light Pink', token: '--colour-pink' },
];
export const products: Product[] = [
  {
    slug: 'wrist-wraps',
    number: '001.01',
    drop: '001',
    name: 'OVRLD WRIST WRAPS',
    shortName: 'Wrist Wraps',
    statement: 'STAY LOCKED IN.',
    description:
      'An essential for your lifting setup. OVRLD Wrist Wraps are the first part of our debut gear release.',
    story:
      'The setup matters. The moment you get ready, find your position, and commit to the next set. OVRLD Wrist Wraps start there.',
    image: '/images/wrist-wraps.webp',
    imageAlt:
      'Concept preview of two black woven OVRLD wrist wraps on a graphite studio surface',
    availability: { status: 'coming-soon' },
    colourways,
    anatomy: [
      { label: 'WOVEN BAND', x: 40, y: 30, side: 'left' },
      { label: 'STITCHED LABEL', x: 64, y: 59, side: 'right' },
      { label: 'WRAP PROFILE', x: 73, y: 73, side: 'right' },
    ],
    detailTopics: [
      {
        title: 'THE WRAP',
        text: 'A wrist-focused addition to your training setup.',
      },
      {
        title: 'THE DETAILS',
        text: 'Materials, dimensions, and closure specifications will be confirmed before preorders open.',
      },
      {
        title: 'THE FIT',
        text: 'Sizing and fitting guidance will be published with the final product.',
      },
    ],
  },
  {
    slug: 'lifting-straps',
    number: '001.02',
    drop: '001',
    name: 'OVRLD GRIPS',
    shortName: 'Grips',
    statement: 'GRIP SHOULDN’T END THE SET.',
    description:
      'Made for the pulling side of your training. Meet OVRLD Grips, the second essential in our first drop.',
    story:
      'A bar in your hands. Another set ahead. Our first grips are part of a simple idea: give the work your full attention.',
    image: '/images/lifting-straps.webp',
    imageAlt:
      'Concept preview of black OVRLD grips with wrist cuffs and stitched palm flaps',
    availability: { status: 'coming-soon' },
    colourways,
    anatomy: [
      { label: 'WRIST CUFF', x: 35, y: 70, side: 'left' },
      { label: 'PALM SECTION', x: 38, y: 30, side: 'left' },
      { label: 'STITCHING', x: 68, y: 45, side: 'right' },
    ],
    detailTopics: [
      {
        title: 'THE GRIP',
        text: 'A pulling accessory for the OVRLD training setup.',
      },
      {
        title: 'THE DETAILS',
        text: 'Materials, construction, and care guidance will be confirmed before launch.',
      },
      {
        title: 'THE SETUP',
        text: 'A product-specific fitting and use guide will accompany the final design.',
      },
    ],
  },
];
export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
