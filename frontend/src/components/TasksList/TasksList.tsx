import { FC, useMemo } from 'react';
import { Plate } from './Plate/Plate';
import s from './TasksList.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const TasksList: FC = () => {
  const { tasks } = useAppSelector((state) => state.tasksReducer);
  const { month, year } = useAppSelector((state) => state.timeReducer);

  const filterTasks = useMemo(() => {
    if (!tasks || !month || !year) return [];
    return tasks.filter((item) => item.date.month === month && item.date.year.toString() === year.toString());
  }, [tasks, month, year]);

  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.blockPlates}>
        {filterTasks && filterTasks.length === 0 && <p className={s.plug}>No tasks</p>}
        {filterTasks && filterTasks.length > 0 && filterTasks.map((item) => <Plate key={item.id} task={item} />)}
      </div>
    </div>
  );
};
