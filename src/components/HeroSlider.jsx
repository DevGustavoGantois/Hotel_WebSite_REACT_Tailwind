import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// Import required modules
import { EffectFade, Autoplay } from 'swiper/modules';
// Images
import img1 from '../assets/img/heroSlider/1.jpg';
import img2 from '../assets/img/heroSlider/2.jpg';
import img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Seu hotel de luxo para férias',
    bg: img1,
    btnText: 'Veja Outros Quartos',
  },
  {
    title: 'Seu hotel de luxo para férias',
    bg: img2,
    btnText: 'Veja Outros Quartos',
  },
  {
    title: 'Seu hotel de luxo para férias',
    bg: img3,
    btnText: 'Veja Outros Quartos',
  }
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect='fade'
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className='heroSlider h-[600px] lg:h-[860px]'
    >
      {slides.map((slide, index) => {
        // destructure slide
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
            <div className='z-20 text-white text-center'>
              <div className='uppercase font-tertiary tracking-[6px] mb-5'>Apenas Aproveite e relaxe</div>
              <div>
                <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                  {title}
                </h1>
                <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
              </div>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full' src={bg} alt={title} />
              <div className='absolute top-0 w-full h-full bg-black opacity-70'></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;