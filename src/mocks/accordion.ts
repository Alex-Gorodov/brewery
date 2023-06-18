import { AccordionItemType } from "../types/accordion-item-type";

export const accordion: AccordionItemType[] =
  [
    {
      id: 1,
      title: 'We are Braga Brewery',
      text: 'Ordering from us has never been easier. Simply browse our online menu, choose your favorite beers, and place your order. We\'ll have your beer freshly brewed and ready for pickup or delivery, whichever is convenient for you.',
    },
    {
      id: 2,
      title: 'To customers',
      links: [
        'Discover beers',
        'About suppliers',
        'Blog',
        'Store',
        'Brew with us',
        'Contact',
      ]
    },
    {
      id: 3,
      title: 'HQ',
      text: `Braga brewery ${'\n'} Peer 52 ${'\n'} Haifa / Israel`
    },
  ];