import { PromoCard } from "../../types/promo-card";
import './promo.sass'

type PromoProps = {
  card: PromoCard;
}

export function PromoItem({card}: PromoProps): JSX.Element {
  return (
    <li className="promo__item" 
        style={
          {
            background: `linear-gradient(to bottom, #000000 0.27%, rgba(0, 0, 0, 0) 99.73%),
              url(${card.image}) no-repeat`,
            backgroundSize: 'cover'}
        }
    >
      <h2 className="promo__title">{card.title}</h2>
      <p className="promo__description">{card.description}</p>
      <a className="button promo__btn" href="#">{card.button}</a>
    </li>
  );
}
