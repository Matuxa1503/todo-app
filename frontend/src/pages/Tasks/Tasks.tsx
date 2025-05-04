import { FC, useState } from 'react';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './Tasks.module.scss';
import { NotebookPen } from 'lucide-react';

export const Tasks: FC = () => {
  const [active, isActive] = useState<'left' | 'right'>('left');
  // ПОВЫНОСИТЬ ВСЕ ПО КОМПОНЕНТАМ ЧТОБЫ НЕ БЫЛО ЗАХЛАМЛЕНИЯ, АНИМАЦИЮ ДОБАВИТЬ ПРИ ИЗМЕНЕНИИ КОНТЕНТА ДНЯ И КАЛЕНДАРЯ
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.panel}>+</div>
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

        <div className={s.blockTasks}>
          <h2 className={s.subtitle}>This month</h2>
          <div className={s.plate}>
            <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 40 40">
              <path fill="none" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path>
              <path
                fill="#B1B1B1"
                d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"
              ></path>
              <path fill="none" stroke="#B1B1B1" stroke-miterlimit="10" stroke-width="3" d="M11.2,20.1l5.8,5.8l13.2-13.2"></path>
            </svg>
            <div className={s.taskTitle}>Сходить в душ</div>
            <div className={s.date}>3 Feb</div> {/* первые 3 буквы показывать */}
            <div className={s.time}>12:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
