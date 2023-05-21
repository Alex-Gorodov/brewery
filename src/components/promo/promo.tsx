import logo from '../../logo.svg';
import './promo.sass';

function Promo(): JSX.Element {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo__img-wrapper">
          <img src={logo} alt="" className="promo__img" />
        </div>
        <h1 className="promo__title">Brewery</h1>
        <p className="promo__description">Welcome to our Micro Brewery! We are passionate about creating unique, handcrafted beers using only the finest ingredients. Our goal is to provide you with a memorable drinking experience every time you order from us.</p>
        <button className="promo__btn button" type="button">Order</button>
      </div>
    </div>
  );
}

export default Promo;