import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.sass'
import { advantages } from '../../mocks/advantages';
import { AdvantageItem } from './advantage-item';
import { ScreenSizes } from '../../const';
import { useWindowSize } from '../../hooks/use-window-size';


export function AdvantagesSwiper(): JSX.Element {

  const size = useWindowSize();

  return (  
    size.width !== undefined && size.width < ScreenSizes.Tablet ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {advantages.map((advantage) => (
            <SwiperSlide key={advantage.id}>
              <AdvantageItem advantage={{
                id: advantage.id,
                icon: advantage.icon,
                title: advantage.title,
                description: advantage.description
              }}/>
            </SwiperSlide>
          ))}
        </Swiper>)
      : 
        <ul className="advantage__list">
          {advantages.map((advantage) => (
            <li className="advantage__item" key={advantage.id}>
              <AdvantageItem advantage={{
                id: advantage.id,
                icon: advantage.icon,
                title: advantage.title,
                description: advantage.description
              }}/>
            </li>
          ))}
        </ul>
  )}