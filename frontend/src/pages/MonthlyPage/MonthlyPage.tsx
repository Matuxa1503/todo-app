import { FC, useState } from 'react';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './MonthlyPage.module.scss';
import { TasksList } from '../../components/TasksList/TasksList';
import { Popup } from '../../components/Popup/Popup';

export const MonthlyPage: FC = () => {
  const [date, setDate] = useState<string | undefined | Date>(new Date());
  console.log(date);

  return (
    <>
      <div className={s.panel}>+</div>
      <CalendarTask setDate={setDate} />
      <TasksList />
      <Popup />
    </>
  );
};
