// Navigation and routing configuration

export const navConfig = {
  
  mainNav: [
    {
      menuName: 'Locations',
      url: '/#Locations',
      aria_label: "Locations we serve",
      sectionName: 'Locations',
    },
    {
      menuName: 'Reviews',
      url: '/#Reviews',
      aria_label: "Our Reviews",
      sectionName: 'Locations',
    },
    {
      menuName: 'About',
      url: '/#About',
      aria_label: "About Us",
      sectionName: 'Locations',
    }
  ],

  footerNav: [
    // Footer navigation items
  ]
} as const;