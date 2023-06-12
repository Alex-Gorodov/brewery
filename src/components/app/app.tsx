import '../../style.sass';
import { Hero } from '../hero/hero';
import { Header } from '../header/header';
import { AdvantagesSwiper } from '../advantages-swiper/advantages-swiper';
import { PromoList } from '../promo/promo-list';
import { Subscribe } from '../subscribe/subscribe';
import { Address } from '../address/address';
import { Footer } from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <AdvantagesSwiper />
        <PromoList />
        <Subscribe />
        <Address />
      </main>
      <Footer />
    </>
  );
}

export default App;
