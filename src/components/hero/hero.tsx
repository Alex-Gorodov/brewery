import logo from '../../logo.svg';
import './hero.sass';

export function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__img-wrapper">
          <img src={logo} alt="" className="hero__img" />
        </div>
        <h1 className="hero__title">Brewery</h1>
        <p className="hero__description">Welcome to our Micro Brewery! We are passionate about creating unique, handcrafted beers using only the finest ingredients. Our goal is to provide you with a memorable drinking experience every time you order from us.</p>
        <button className="hero__btn button" type="button">Order</button>
      </div>
    </section>
  );
}
