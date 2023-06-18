import { useState } from "react";
import { AccordionItemType } from "../../types/accordion-item-type";
import cn from "classnames";
import './accordion.sass'

type AccordionItemProps = {
  item: AccordionItemType;
}

export function AccordionItem({item}: AccordionItemProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const contentClassName = cn('accordion__content', {
    'accordion__text': item.text,
    'accordion__links': item.links,
    'accordion__content--active': isActive
  })
  
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
        <p className={contentClassName}>
          {item.text}
        </p>
      }
      {
        // item.links && isActive &&
        <ul className={contentClassName}>
          {
            item.links?.map((link) => (
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