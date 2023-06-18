import { accordion } from "../../mocks/accordion";
import { AccordionItem } from "./accordion-item";
import './accordion.sass'

export function AccordionList(): JSX.Element {
  return (
    <ul className="accordion__list">
      {
        accordion.map((item) => (
          <li className="accordion__item">
            <AccordionItem item={item}/>
          </li>
        ))
      }
    </ul>
  );
}
