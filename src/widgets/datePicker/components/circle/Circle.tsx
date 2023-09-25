import style from './Circle.module.scss';
import Points, { PointOnCircle } from './components/points/Points';

function Circle({ slideIndex, onSlideTo, arrData }: PointOnCircle) {
  return (
    <div className={style.circle}>
      <div className={style.line__horizontal} />
      <Points
        arrData={arrData}
        onSlideTo={onSlideTo}
        slideIndex={slideIndex}
      />
    </div>
  );
}

export default Circle;
