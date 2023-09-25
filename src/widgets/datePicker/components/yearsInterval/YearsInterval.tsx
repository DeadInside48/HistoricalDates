import style from './YearsInterval.module.scss';
import Years from './components/Years';

type Props = {
  startYear: number,
  endYear: number,
  amountOfSlides: number,
};

function YearsInterval({ endYear, startYear, amountOfSlides }: Props) {
  return (
    <div className={style['years-interval']}>
      <Years
        className={style['start-year']}
        newYear={startYear}
        amountOfSlides={amountOfSlides}
      />
      <Years
        className={style['end-year']}
        newYear={endYear}
        amountOfSlides={amountOfSlides}
      />
    </div>
  );
}

export default YearsInterval;
