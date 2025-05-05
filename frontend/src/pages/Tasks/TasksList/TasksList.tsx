// for add svg
/// <reference types="vite-plugin-svgr/client" />
import { FC } from 'react';
import UnfulfilledTick from '@/assets/icons/unfulfilledTick.svg?react';
import s from './TasksList.module.scss';

export const TasksList: FC = () => {
  return (
    <div className={s.blockTasks}>
      <h2 className={s.subtitle}>This month</h2>
      <div className={s.plate}>
        <div className={s.block}>
          <UnfulfilledTick width={30} height={30} />
          <div className={s.taskTitle}>Сходить в душ</div>
        </div>
        <div className={s.block}>
          <div className={s.date}>3 Feb</div> {/* первые 3 буквы показывать */}
          <div className={s.time}>12:00</div>
        </div>
      </div>
    </div>
  );
};
