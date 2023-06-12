import '../../style.sass';
import { Hero } from '../hero/hero';
import { Header } from '../header/header';
import { AdvantagesSwiper } from '../advantages-swiper/advantages-swiper';
import { PromoList } from '../promo/promo-list';
import { Subscribe } from '../subscribe/subscribe';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <AdvantagesSwiper />
        <PromoList />
        <Subscribe />
      </main>
    </>
  );
}

export default App;
