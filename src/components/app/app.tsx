import React from 'react';
import '../../style.sass';
import Hero from '../hero/hero';
import Header from '../header/header';
import { AdvantagesSwiper } from '../advantages-swiper/advantages-swiper';
import { PromoList } from '../promo/promo-list';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSwiper />
      <PromoList />
    </>
  );
}

export default App;
