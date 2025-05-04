import { NotebookPen } from 'lucide-react';
import { FC } from 'react';
import { CalendarTask } from '../../../components/CalendarTask/CalendarTask';
import s from './CalendarSection.module.scss';

interface CalendarSectionProps {
  active: 'left' | 'right';
  isActive: (val: 'left' | 'right') => void;
}

export const CalendarSection: FC<CalendarSectionProps> = ({ active, isActive }) => {
  return (
    <div className={s.blockCalendar}>
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
      <CalendarTask />
    </div>
  );
};
