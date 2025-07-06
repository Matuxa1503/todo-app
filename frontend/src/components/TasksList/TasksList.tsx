import { FC } from 'react';
import { Plate } from './Plate/Plate';
import s from './TasksList.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const TasksList: FC = () => {
  const { tasks } = useAppSelector((state) => state.tasksReducer);

  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.blockPlates}>
        {tasks && tasks.length === 0 && <p className={s.plug}>No tasks</p>}
        {tasks && tasks.length > 0 && tasks.map((item, ind) => <Plate key={ind} title={item.task} date={item.date} time={item.time} />)}
      </div>
    </div>
  );
};
