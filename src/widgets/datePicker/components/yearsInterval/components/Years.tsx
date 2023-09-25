import { useEffect, useState } from 'react';

type Props = {
  newYear: number,
  amountOfSlides: number,
  className: string,
};

const baseAnimDurationMs = 1250;

function Years({ newYear, className, amountOfSlides }: Props) {
  const [year, setYear] = useState(newYear);

  const setTime = () => {
    if (newYear === year) {
      return;
    }

    const amountStep = Math.abs(newYear - year);
    const timout = baseAnimDurationMs / amountOfSlides / amountStep;
    let prevEndYearValue = year + 1;

    if (year > newYear) {
      prevEndYearValue = year - 1;
    }

    setTimeout(setYear, timout, prevEndYearValue);
  };

  useEffect(() => {
    setTime();
  }, [year, newYear]);

  return (
    <span className={className}>
      {year}
    </span>
  );
}

export default Years;
