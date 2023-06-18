import { useState } from "react";
import { ScreenSizes } from "../../const";
import { useWindowSize } from "../../hooks/use-window-size";
import './footer.sass';
import { AccordionList } from "../accordion/accordion-list";

export function Footer(): JSX.Element {
  const size = useWindowSize();
  const [email, setEmail] = useState('');

  return(
    <footer className="footer">
      <div className="footer__wrapper">
        {size.width !== undefined && size.width < ScreenSizes.Tablet
          ? 
          <>
            <AccordionList/>
            <div className="footer__content-item footer__subscribe">
              <h3 className="footer__subtitle">Beer mail</h3>
              <p>The latest arrivals, news, stories and deals. Don’t miss out!</p>
              <form className="subscribe__form footer__subscribe-form" action="#" method="post">
                <label className="subscribe__field" htmlFor="email">
                  <input
                    className="subscribe__input footer__subscribe-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your e-mail..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
                <button className="subscribe__btn footer__subscribe-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </>
          : 
          <div className="footer__content">
            <div className="footer__content-item footer__about">
              <h3 className="footer__subtitle">We are Braga Brewery</h3>
              <p>Ordering from us has never been easier. Simply browse our online menu, choose your favorite beers, and place your order. We'll have your beer freshly brewed and ready for pickup or delivery, whichever is convenient for you.</p>
            </div>
            <div className="footer__content-item footer__address">
              <h3 className="footer__subtitle">HQ</h3>
              <address className="footer__address-text">
                <span>Peer 52</span>
                <span>32491 Haifa</span>
                <span>Israel</span>
              </address>
            </div>
            <div className="footer__content-item footer__links">
              <h3 className="footer__subtitle">To customers</h3>
              <ul className="footer__links-list">
                <li className="footer__links-item">
                  <a href="#!">Discover beers</a>
                </li>
                <li className="footer__links-item">
                  <a href="#!">About suppliers</a>
                </li>
                <li className="footer__links-item">
                  <a href="#!">Blog</a>
                </li>
                <li className="footer__links-item">
                  <a href="#!">Store</a>
                </li>
                <li className="footer__links-item">
                  <a href="#!">Brew with us</a>
                </li>
                <li className="footer__links-item">
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer__content-item footer__subscribe">
              <h3 className="footer__subtitle">Beer mail</h3>
              <p>The latest arrivals, news, stories and deals. Don’t miss out!</p>
              <form className="subscribe__form footer__subscribe-form" action="#" method="post">
                <label className="subscribe__field" htmlFor="email">
                  <input
                    className="subscribe__input footer__subscribe-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your e-mail..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
                <button className="subscribe__btn footer__subscribe-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        }
      </div>
    </footer>
  );
}