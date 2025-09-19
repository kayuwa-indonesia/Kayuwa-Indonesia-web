export const products = [
  {
    id: 1,
    name: 'Standard MDF Board',
    type: 'MDF',
    imageId: 'product-mdf-1',
    description:
      'Versatile and affordable Medium-Density Fibreboard, ideal for furniture and interior paneling. Smooth surface perfect for painting.',
    specs: {
      thickness: '18mm',
      size: '4ft x 8ft',
      grade: 'Interior',
      finish: 'Sanded',
    },
  },
  {
    id: 2,
    name: 'Oak Finish HPL',
    type: 'HPL',
    imageId: 'product-hpl-1',
    description:
      'Durable High-Pressure Laminate with a decorative oak finish. Highly resistant to scratches, impact, and wear.',
    specs: {
      thickness: '0.8mm',
      size: '4ft x 8ft',
      grade: 'Decorative',
      finish: 'Oak Woodgrain',
    },
  },
  {
    id: 3,
    name: 'Baltic Birch Plywood',
    type: 'Birch',
    imageId: 'product-birch-1',
    description:
      'Multi-ply Birch plywood known for its strength and void-free core. Excellent for cabinetry, joinery, and laser cutting.',
    specs: {
      thickness: '12mm',
      size: '5ft x 5ft',
      grade: 'B/BB',
      finish: 'Unfinished',
    },
  },
  {
    id: 4,
    name: 'Marine Grade Plywood',
    type: 'Marine',
    imageId: 'product-marine-1',
    description:
      'Water and boil-proof (WBP) plywood made with waterproof glue. Designed for high-moisture and marine environments.',
    specs: {
      thickness: '18mm',
      size: '4ft x 8ft',
      grade: 'BS 1088',
      finish: 'Sanded',
    },
  },
  {
    id: 5,
    name: 'Oriented Strand Board (OSB/3)',
    type: 'OSB',
    imageId: 'product-osb-1',
    description:
      'Engineered wood panel for load-bearing applications in humid conditions. Commonly used for sheathing in walls, floors, and roofs.',
    specs: {
      thickness: '11mm',
      size: '4ft x 8ft',
      grade: 'OSB/3',
      finish: 'Rough',
    },
  },
  {
    id: 6,
    name: 'Standard Particle Board',
    type: 'Particle Board',
    imageId: 'product-particle-1',
    description:
      'Cost-effective panel made from wood particles. Suitable for non-structural applications like shelving and substrate for veneers.',
    specs: {
      thickness: '16mm',
      size: '4ft x 8ft',
      grade: 'Standard',
      finish: 'Unfinished',
    },
  },
];

export const productTypes = [
  ...new Set(products.map((product) => product.type)),
];

export const articles = [
  {
    id: 1,
    title: 'Choosing the Right Plywood for Your Project',
    slug: 'choosing-right-plywood',
    imageId: 'article-1',
    description:
      'A comprehensive guide to understanding different plywood grades, types, and what to consider for your specific application.',
    content: 'Full article content goes here...',
  },
  {
    id: 2,
    title: 'Plywood Finishing Techniques: From Sanding to Sealing',
    slug: 'plywood-finishing-techniques',
    imageId: 'article-4',
    description:
      'Learn the best practices for finishing your plywood project to ensure durability and a beautiful, professional look.',
    content: 'Full article content goes here...',
  },
  {
    id: 3,
    title: 'MDF vs. Plywood: What’s the Difference?',
    slug: 'mdf-vs-plywood',
    imageId: 'article-3',
    description:
      'An in-depth comparison of Medium-Density Fibreboard and traditional plywood, helping you decide which is better for your needs.',
    content: 'Full article content goes here...',
  },
  {
    id: 4,
    title: 'Top 5 Plywood Projects for DIY Enthusiasts',
    slug: 'diy-plywood-projects',
    imageId: 'article-2',
    description:
      'Get inspired with these five creative and practical projects you can build at home using basic tools and plywood.',
    content: 'Full article content goes here...',
  },
];
