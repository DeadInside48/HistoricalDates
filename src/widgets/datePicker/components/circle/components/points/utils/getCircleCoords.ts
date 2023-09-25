/* eslint-disable max-len */
interface ICoordinates {
  degree: number,
  step: number,
  numberOfElement: number,
  radius: number,
}

export const convertDegreeToRad = (degree: number): number => degree / (180 / Math.PI);

export const getXCoord = ({
  degree,
  step,
  numberOfElement,
  radius,
}: ICoordinates): number => radius * Math.sin(convertDegreeToRad(degree + (step * numberOfElement)));

export const getYCoord = ({
  degree,
  step,
  numberOfElement,
  radius,
}: ICoordinates): number => radius * Math.cos(convertDegreeToRad(degree + (step * numberOfElement)));
