import { FC } from 'react';
import { NotebookPen } from 'lucide-react';
import s from './Header.module.scss';

interface HeaderProps {
  activePage: 'left' | 'right';
  isActivePage: (val: 'left' | 'right') => void;
}

export const Header: FC<HeaderProps> = ({ activePage, isActivePage }) => {
  return (
    <div className={s.header}>
      <div className={s.blockTitle}>
        <NotebookPen color="#6969d4" width={40} height={40} />
        <h1 className={s.title}>Todo Tasks</h1>
      </div>
      <div className={s.blockBtn}>
        <button onClick={() => isActivePage('left')} className={`${s.btn} ${activePage === 'left' && s.active}`}>
          Monthly
        </button>
        <button onClick={() => isActivePage('right')} className={`${s.btn} ${activePage === 'right' && s.active}`}>
          Daily
        </button>
      </div>
    </div>
  );
};
