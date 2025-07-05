import { FC } from 'react';
import { Plate } from './Plate/Plate';
import s from './TasksList.module.scss';

export const TasksList: FC = () => {
  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.blockPlates}>
        <Plate title="Сходить в душ и погулять с собакой Рекс" date="03 Feb" time="12:00" />
        <Plate title="Сходить в магазин" date="12 Feb" time="15:00" />
        <Plate title="Купить машину на барахолке у местного чувака" date="25 Feb" time="19:00" />
      </div>
    </div>
  );
};
