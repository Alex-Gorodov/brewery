import { useState } from "react";
import { AccordionItemType } from "../../types/accordion-item-type";
import './accordion.sass'

type AccordionItemProps = {
  item: AccordionItemType;
}

export function AccordionItem({item}: AccordionItemProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  
  function handleActive(): void {
    setIsActive(!isActive);
  }
  return (
    <div className="accordion__item-wrapper">
      <div className="accordion__title-wrapper">
        <h3 className="accordion__title">
          {item.title}
        </h3>
        <button className="accordion__btn" type="button" onClick={handleActive}>
          {isActive && '-'}
          {!isActive && '+'}
        </button>
      </div>
      {
        isActive && <p className="accordion__text">
          {
            isActive && item.text
          }
        </p>
      }
      {
        item.links && isActive &&
        <ul className="accordion__links">
          {
            isActive && item.links.map((link) => (
              <li>
                <a href="#!" className="accordion__link" key={link.length}>
                  {link}
                </a>
              </li>
            ))
          }
        </ul>
      }

    </div>
  );
}