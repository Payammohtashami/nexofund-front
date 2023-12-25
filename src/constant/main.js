import routes from "config/routes";

export const headerMenu = [
    {
        id: 'menu-1',
        title: 'Home',
        url: routes.base,
    },
    {
      id: 'menu-2',
      title: 'Panel',
      url: routes.panel.base,
    },
    
    {
        id: 'menu-4',
        title: 'Wallet',
        url: routes.wallet.base,
    },
    {
        id: 'menu-5',
        title: 'FAQ',
        url: routes.faq,
    },
];

export const socialMedia = [
    {
      id: 'social-1',
      name: 'instagram',
      url: '#',
    },
    {
      id: 'social-2',
      name: 'youtube',
      url: '#',
    },
    {
      id: 'social-3',
      name: 'telegram',
      url: '#',
    },
    {
      id: 'social-4',
      name: 'twitter',
      url: '#',
    },
  ];