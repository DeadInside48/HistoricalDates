import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SwitchingBtn from './components/switchingBtn/SwitchingBtn';
import ContentSlide from './components/contentSlide/ContentSlide';
import { HistoricalInfo } from '../../testData';

import style from './YearsInfo.module.scss';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

type Props = {
  historicalInfoList: HistoricalInfo[],
};

const breakpointsParams = {
  0: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  321: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

function YearsInfo({ historicalInfoList }: Props) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const checkedBeginEnd = (swiperInstance: SwiperClass) => {
    setIsEnd(swiperInstance.isEnd);
    setIsBeginning(swiperInstance.isBeginning);
  };

  return (
    <div className={style.yearsInfo}>
      <SwitchingBtn
        isDisable={isBeginning}
        onClick={() => swiper?.slidePrev()}
      >
        <IoIosArrowBack />
      </SwitchingBtn>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={checkedBeginEnd}
        watchSlidesProgress
        modules={[FreeMode]}
        grabCursor
        freeMode
        breakpoints={breakpointsParams}
      >
        {
          historicalInfoList.map((elem) => (
            <SwiperSlide
              key={elem.year}
            >
              <ContentSlide
                year={elem.year}
                fact={elem.fact}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <SwitchingBtn
        isDisable={isEnd}
        onClick={() => swiper?.slideNext()}
      >
        <IoIosArrowForward />
      </SwitchingBtn>
    </div>
  );
}

export default YearsInfo;
