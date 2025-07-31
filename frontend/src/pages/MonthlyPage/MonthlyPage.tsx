import { FC, useState } from 'react';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './MonthlyPage.module.scss';
import { TasksList } from '../../components/TasksList/TasksList';
import { useAppDispatch } from '../../hooks/redux';
import { openPopupForCreateTask } from '../../store/reducers/PopupSlice';

export const MonthlyPage: FC = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState<string>('');

  return (
    <>
      <div onClick={() => dispatch(openPopupForCreateTask(date))} className={s.panel}>
        +
      </div>
      <CalendarTask setDate={setDate} />
      <TasksList />
    </>
  );
};
