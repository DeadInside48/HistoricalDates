/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { getXCoord, getYCoord } from './utils/getCircleCoords';
import style from './Points.module.scss';
import { Period } from '../../../../../../testData';

export type PointOnCircle = {
  slideIndex: number,
  onSlideTo: (index: number) => void,
  arrData: Period[],
};

function Points({
  slideIndex,
  onSlideTo,
  arrData,
}: PointOnCircle) {
  const [prevSlide, setPrevSlide] = useState<number>(0);
  const [degreeRotate, setDegreeRotate] = useState<number>(0);

  const startDegree = 150;
  const radius = 265;
  const step = -360 / arrData.length;

  const xCoordante = (numberOfElement: number) => getXCoord({
    degree: startDegree,
    step,
    numberOfElement,
    radius,
  });

  const yCoordinate = (numberOfElement: number) => getYCoord({
    degree: startDegree,
    step,
    numberOfElement,
    radius,
  });

  const getDegreeRotate = () => {
    const degree = step * (slideIndex - prevSlide);

    if (degree <= -180) {
      return degree + 360;
    }

    return degree >= 180 ? degree - 360 : degree;
  };

  useEffect(() => {
    setDegreeRotate(degreeRotate + getDegreeRotate());

    setPrevSlide(slideIndex);
  }, [slideIndex, prevSlide]);

  return (
    <div
      className={style['center-point']}
      style={{
        transform: `rotate(${degreeRotate}deg)`,
      }}
    >
      {
        arrData.map((el, index) => (
          <div
            key={el.endYear}
            className={`${style.point__wrapper} ${slideIndex === index ? style['radius-point__active'] : ''}`}
            style={{
              transform: `
              translate(
                ${xCoordante(index)}px,
                ${yCoordinate(index)}px
              )
              rotate(${-degreeRotate}deg)
              `,
            }}
          >
            <div
              className={`${style.container} ${slideIndex === index ? style.container__active : ''}`}
              onClick={() => {
                onSlideTo(index);
                setPrevSlide(slideIndex);
              }}
            >
              <span className={style['number-slide']}>
                {
                  index + 1
                }
              </span>
              <span className={style.thema}>
                {el.thema}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Points;
