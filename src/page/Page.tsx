import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';
import { CreativeEffectOptions } from 'swiper/types';
import DatePicker from '../widgets/datePicker/DatePicker';
import YearsInfo from '../widgets/yearsInfo/YearsInfo';
import SwitchingSlides from '../components/SwitchingSlides/SwitchingSlides';
import { testDataList } from '../testData';
import style from './Page.module.scss';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

const swiperCreativeEffect: CreativeEffectOptions = {
  prev: {
    opacity: 0,
  },
  next: {
    opacity: 0,
  },
};

const breakpointsParams = {
  0: {
    pagination: {
      enabled: true,
      clickable: true,
    },
  },
  321: {
    pagination: {
      enabled: false,
    },
  },
};

function Page() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleOnSlideChange = (swiperInstance: SwiperClass) => {
    setActiveSlide(swiperInstance.activeIndex);
  };

  return (
    <div
      className={style.page}
    >
      {
        swiper
          ? (
            <DatePicker
              arrData={testDataList}
              amountOfSlides={testDataList.length}
              slideIndex={activeSlide}
              currentEndYear={testDataList[activeSlide].endYear}
              currentStartYear={testDataList[activeSlide].startYear}
              thema={testDataList[activeSlide].thema}
              onSlideTo={(index: number) => swiper.slideTo(index)}
            />
          )
          : null
      }
      <div className={style.line__vertical} />
      <SwitchingSlides
        amountSlides={testDataList.length}
        currentSlide={activeSlide}
        onSlideNext={() => swiper?.slideNext()}
        onSlidePrev={() => swiper?.slidePrev()}
      />
      <Swiper
        onSwiper={setSwiper}
        effect="creative"
        creativeEffect={swiperCreativeEffect}
        speed={1250}
        pagination
        modules={[EffectCreative, Pagination]}
        onSlideChange={handleOnSlideChange}
        allowTouchMove={false}
        breakpoints={breakpointsParams}
      >
        {
          testDataList.map((el) => (
            <SwiperSlide key={el.endYear}>
              <YearsInfo historicalInfoList={el.factsList} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default Page;
