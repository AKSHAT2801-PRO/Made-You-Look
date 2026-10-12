// Prices transcribed from the studio's price menu.
export const serviceGroups = [
  {
    title: 'The base',
    items: [
      {
        title: 'Basic polish',
        description: 'All 10 natural nails, in one colour.',
        price: '₹350',
      },
      {
        title: 'Builder gel overlay',
        description: 'Optional add-on to basic polish, for all 10 natural nails.',
        price: '+₹150',
      },
    ],
  },
  {
    title: 'Nail art',
    items: [
      {
        title: 'Simple, single-colour',
        description: 'Dots, stripes, simple French tips.',
        price: '₹35 / nail',
      },
      {
        title: 'Complicated, multi-colour',
        description: 'Designs combining multiple colours and patterns.',
        price: '₹45 / nail',
      },
    ],
  },
  {
    title: 'Embellishments',
    items: [
      {
        title: 'Rhinestones',
        description: 'Charged per nail that receives rhinestones.',
        price: '₹30 / nail',
      },
    ],
  },
  {
    title: 'Extensions',
    note: 'Plain finish included.',
    items: [
      {
        title: 'Gel extensions',
        description: '',
        price: '₹1,000',
      },
      {
        title: 'Soft gel extensions',
        description: '',
        price: '₹1,200',
      },
    ],
  },
]

export const services = serviceGroups.flatMap((group) => group.items)

// Gallery photos live in /public/gallery.
export const gallery = [
  { name: 'Red and rhinestone', image: '/gallery/nailimg1.webp' },
  { name: 'Pastel rainbow', image: '/gallery/nailimg2.webp' },
  { name: 'Pink floral', image: '/gallery/nailimg3.webp' },
  { name: 'Colour-pop', image: '/gallery/Hero1.webp' },
]
