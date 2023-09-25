import style from './Title.module.scss';

function Title() {
  return (
    <div className={style.title}>
      <div className={style['gradient-line']} />
      <span className={style.title__name}>Исторические даты</span>
    </div>
  );
}

export default Title;
