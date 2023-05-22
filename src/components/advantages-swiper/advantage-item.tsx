import { Advantage } from '../../types/advantage';
import './advantage.sass'

type AdvantageProps = {
  advantage: Advantage;
}

export function AdvantageItem({advantage}: AdvantageProps): JSX.Element {
  return ( 
    <div className="advantage__wrapper">
      <img className='advantage__icon' src={advantage.icon} alt="" />
      <p className="advantage__title">{advantage.title}</p>
      <p className="advantage__description">{advantage.description}</p>
    </div>
  );
}
