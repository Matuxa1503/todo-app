import { FC } from 'react';
import { NotebookPen } from 'lucide-react';
import s from './Header.module.scss';

interface HeaderProps {
  active: 'left' | 'right';
  isActive: (val: 'left' | 'right') => void;
}

export const Header: FC<HeaderProps> = ({ active, isActive }) => {
  return (
    <div className={s.header}>
      <div className={s.blockTitle}>
        <NotebookPen color="#6969d4" width={40} height={40} />
        <h1 className={s.title}>Todo Tasks</h1>
      </div>
      <div className={s.blockBtn}>
        <button onClick={() => isActive('left')} className={`${s.btn} ${active === 'left' && s.active}`}>
          Monthly
        </button>
        <button onClick={() => isActive('right')} className={`${s.btn} ${active === 'right' && s.active}`}>
          Daily
        </button>
      </div>
    </div>
  );
};
