import { FC } from 'react';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './MonthlyPage.module.scss';
import { TasksList } from '../../components/TasksList/TasksList';

export const MonthlyPage: FC = () => {
  return (
    <>
      <div className={s.panel}>+</div>
      <CalendarTask />
      <TasksList />
    </>
  );
};
