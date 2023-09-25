import style from './Pagination.module.scss';

type Props = {
  currentSlide: number,
  amountSlides: number,
};

function Pagination({ currentSlide, amountSlides }: Props) {
  return (
    <div className={style['switching-slides__pagination']}>
      <span>{`0${currentSlide + 1}/`}</span>
      <span>{`0${amountSlides}`}</span>
    </div>
  );
}

export default Pagination;
