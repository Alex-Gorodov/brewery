import React from 'react';
import '../../style.sass';
import Promo from '../promo/promo';
import Header from '../header/header';
import AdvantagesSwiper from '../advantages-swiper/advantages-swiper';

function App() {
  return (
    <>
      <Header />
      <Promo />
      <AdvantagesSwiper />
    </>
  );
}

export default App;
