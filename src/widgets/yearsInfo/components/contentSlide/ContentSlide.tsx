import style from './ContentSlide.module.scss';

type Props = {
  year: number,
  fact: string,
};

function ContentSlide({ year, fact }: Props) {
  return (
    <div className={style.content}>
      <span className={style.title}>{year}</span>
      <span className={style.description}>{fact}</span>
    </div>
  );
}

export default ContentSlide;
