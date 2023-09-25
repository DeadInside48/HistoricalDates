import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from './SwitchingBtns.module.scss';
import { SwitchProps } from '../../types';

function SwitchingBtns({
  currentSlide,
  amountSlides,
  onSlideNext,
  onSlidePrev,
}: SwitchProps) {
  return (
    <div className={style['switching-slides__btns']}>
      <button
        type="button"
        className={style.btn}
        disabled={currentSlide === 0}
        onClick={onSlidePrev}
      >
        <IoIosArrowBack
          className={style['icons-size']}
        />
      </button>
      <button
        type="button"
        className={style.btn}
        disabled={currentSlide + 1 === amountSlides}
        onClick={onSlideNext}
      >
        <IoIosArrowForward
          className={style['icons-size']}
        />
      </button>
    </div>
  );
}

export default SwitchingBtns;
