import style from './SwitchingBtn.module.scss';

type Props = {
  isDisable: boolean,
  onClick: () => void,
  children: JSX.Element | string,
};

function SwitchingBtn({ isDisable, onClick, children }: Props) {
  return (
    <div className={style.btn__wrapper}>
      <button
        type="button"
        style={{
          display: `${isDisable ? 'none' : 'block'}`,
        }}
        className={style.btn}
        onClick={onClick}
      >
        {
          children
        }
      </button>
    </div>
  );
}

export default SwitchingBtn;
