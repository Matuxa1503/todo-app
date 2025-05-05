import { FC } from 'react';
import { Plate } from './Plate/Plate';
import s from './TasksList.module.scss';

export const TasksList: FC = () => {
  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.blockPlates}>
        <Plate />
        <Plate />
        <Plate />
      </div>
    </div>
  );
};
