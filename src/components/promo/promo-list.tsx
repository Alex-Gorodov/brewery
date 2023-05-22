import { promos } from "../../mocks/promos";
import { PromoItem } from "./promo-item";

export function PromoList(): JSX.Element {
  return (
    <ul className="promo__list">
      {promos.map((card) => (
        <PromoItem key={card.id} card={{
          id: card.id,
          title: card.title,
          description: card.description,
          button: card.button,
          image: card.image
        }}/>
      ))}
    </ul>
  );
}
