import { FC, useState } from 'react';
import s from './Tasks.module.scss';
import { CalendarSection } from './CalendarSection/CalendarSection';
import { TasksList } from './TasksList/TasksList';

export const Tasks: FC = () => {
  const [active, isActive] = useState<'left' | 'right'>('left');
  // ПОВЫНОСИТЬ ВСЕ ПО КОМПОНЕНТАМ ЧТОБЫ НЕ БЫЛО ЗАХЛАМЛЕНИЯ, АНИМАЦИЮ ДОБАВИТЬ ПРИ ИЗМЕНЕНИИ КОНТЕНТА ДНЯ И КАЛЕНДАРЯ
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.panel}>+</div>
        <CalendarSection active={active} isActive={isActive} />
        <TasksList />
      </div>
    </div>
  );
};
