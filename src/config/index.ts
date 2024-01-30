export const PRODUCT_CATEGORIES = [
  {
    label: 'Ui Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },

      {
        name: 'Bestseller',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite IconPicks',
        href: '#',
        imageSrc: '/nav/icons/pikcs.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },

      {
        name: 'Bestselling Icons',
        href: '#',
        imageSrc: '/nav/icons/bestseller.jpg',
      },
    ],
  },
]
