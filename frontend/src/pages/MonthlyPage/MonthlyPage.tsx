import { FC, useState } from 'react';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './MonthlyPage.module.scss';
import { TasksList } from '../../components/TasksList/TasksList';
import { Popup } from '../../components/Popup/Popup';

export const MonthlyPage: FC = () => {
  const [date, setDate] = useState<string | undefined>('');
  const [isShowPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setShowPopup(true)} className={s.panel}>
        +
      </div>
      <CalendarTask setDate={setDate} />
      <TasksList />
      {isShowPopup && <Popup date={date} setShowPopup={() => setShowPopup(false)} />}
    </>
  );
};
