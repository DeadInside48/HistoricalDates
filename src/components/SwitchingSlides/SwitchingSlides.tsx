import style from './SwitchingSlides.module.scss';
import Pagination from './components/pagination/Pagination';
import SwitchingBtns from './components/switchingBtns/SwitchingBtns';
import { SwitchProps } from './types';

function SwitchingSlides({
  currentSlide,
  amountSlides,
  onSlideNext,
  onSlidePrev,
}: SwitchProps) {
  return (
    <div className={style['switching-slides']}>
      <Pagination
        currentSlide={currentSlide}
        amountSlides={amountSlides}
      />
      <SwitchingBtns
        currentSlide={currentSlide}
        amountSlides={amountSlides}
        onSlideNext={onSlideNext}
        onSlidePrev={onSlidePrev}
      />
    </div>
  );
}

export default SwitchingSlides;
