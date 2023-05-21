import { Advantage } from "../types/advantage";
import baghappy from '../img/icons/baghappy.svg';
import gift from '../img/icons/gift.svg';
import heart from '../img/icons/heart.svg';
import house from '../img/icons/house.svg';

export const advantages: Advantage[] =
  [
    {
      id: 1,
      icon: house,
      title: 'Straight from the brewery',
      description: '100% direct import. You buy from the brewery.',
    },
    {
      id: 2,
      icon: heart,
      title: 'For the love of beer',
      description: 'Cold shipped to us. Stored refrigerated. Quick to you.',
    },
    {
      id: 3,
      icon: baghappy,
      title: 'The freshest beer',
      description: 'The freshest hand-crafted beer in a variety of styles',
    },
    {
      id: 4,
      icon: gift,
      title: 'Get more and save',
      description: 'A better deal on shipping and even an extra discount.'
    }
  ];
