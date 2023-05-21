import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.sass'
import { advantages } from '../../mocks/advantages';
import { AdvantageItem } from './advantage-item';

function AdvantagesSwiper(): JSX.Element {
  return (  
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
    </Swiper>
  );
}

export default AdvantagesSwiper;
