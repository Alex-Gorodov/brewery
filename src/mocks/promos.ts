import { PromoCard } from '../types/promo-card';
import promo1 from '../img/promo/promo1.jpg'
import promo2 from '../img/promo/promo2.jpg'
import promo3 from '../img/promo/promo3.jpg'
import promo4 from '../img/promo/promo4.jpg'
import promo5 from '../img/promo/promo5.jpg'

export const promos: PromoCard[] =
  [
    {
      id: 1,
      title: 'Hop forward.',
      description: 'We present the largest selection of hop-forward craft beers to you. Discover them all.',
      button: 'Take your pick',
      image: promo1,
    },
    {
      id: 2,
      title: 'trusted suppliers.',
      description: 'We order ingredients for our beer only from the best local suppliers.',
      button: 'Check them!',
      image: promo2,
    },
    {
      id: 3,
      title: 'wide choose.',
      description: 'We offer a wide range of beer styles, from crisp lagers to hoppy IPAs, rich stouts, and fruity sours.',
      button: 'To store',
      image: promo3,
    },
    {
      id: 4,
      title: 'Brew Master.',
      description: 'Join us for a beer brewing session where we\'ll create a unique and delicious brew tailored to your taste. Let\'s experiment with different ingredients and techniques to craft a beer that\'s all your own. Cheers to a great time!',
      button: 'Let’s brew!',
      image: promo4,
    },
    {
      id: 5,
      title: 'Blog.',
      description: 'Join us as we delve into the world of brewing, sharing tips, tricks, and stories along the way. Whether you\'re a seasoned brewer or just getting started, there\'s something for everyone here.',
      button: 'Get tips!',
      image: promo5,
    },
  ];
