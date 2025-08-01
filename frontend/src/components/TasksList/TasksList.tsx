import { FC } from 'react';
import { Plate } from './Plate/Plate';
import s from './TasksList.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const TasksList: FC = () => {
  const { tasks } = useAppSelector((state) => state.tasksReducer);
  // const { month, year } = useAppSelector((state) => state.timeReducer);

  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.blockPlates}>
        {tasks && tasks.length === 0 && <p className={s.plug}>No tasks</p>}
        {tasks && tasks.length > 0 && tasks.map((item) => <Plate key={item.id} task={item} />)}
      </div>
    </div>
  );
};
