import {
  useRef,
  CSSProperties,
} from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import style from './PeriodThemeOnMob.module.scss';

type Props = {
  thema: string,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function PeriodThemeOnMob({ thema }: Props) {
  const nodeRef = useRef(null);

  return (
    <div className={style['mobile-thema']}>
      <Transition
        nodeRef={nodeRef}
        timeout={0}
        in
        key={thema}
        mountOnEnter
        appear
      >
        {
          (state) => (
            <span
              ref={nodeRef}
              style={{
                ...transitionStyles[state],
              }}
              className={`${style.thema}`}
            >
              {
                state
              }
              {
                thema
              }
            </span>
          )
        }
      </Transition>
      <div className={style['gorizontal-line']} />
    </div>
  );
}

export default PeriodThemeOnMob;
