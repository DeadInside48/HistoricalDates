import { Period } from '../../testData';
import Circle from './components/circle/Circle';
import PeriodThemeOnMob from './components/periodThemeOnMob/PeriodThemeOnMob';
import Title from './components/title/Title';
import YearsInterval from './components/yearsInterval/YearsInterval';
import style from './DatePicker.module.scss';

type Props = {
  slideIndex: number,
  amountOfSlides: number,
  currentStartYear: number,
  currentEndYear: number,
  thema: string,
  arrData: Period[],
  onSlideTo: (index: number) => void,
};

function DatePicker({
  slideIndex,
  amountOfSlides,
  currentStartYear,
  currentEndYear,
  thema,
  arrData,
  onSlideTo,
}: Props) {
  return (
    <div className={style['date-picker']}>
      <Title />
      <YearsInterval
        amountOfSlides={amountOfSlides}
        endYear={currentEndYear}
        startYear={currentStartYear}
      />
      <Circle
        arrData={arrData}
        slideIndex={slideIndex}
        onSlideTo={onSlideTo}
      />
      <PeriodThemeOnMob
        thema={thema}
      />
    </div>
  );
}

export default DatePicker;
