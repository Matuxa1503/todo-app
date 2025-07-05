// for add svg
/// <reference types="vite-plugin-svgr/client" />
import { FC } from 'react';
import UnfulfilledTick from '@/assets/icons/unfulfilledTick.svg?react';
import s from './Plate.module.scss';

interface PlateProps {
  title: string;
  date: string;
  time: string;
}

export const Plate: FC<PlateProps> = ({ title, date, time }) => {
  return (
    <div className={s.plate}>
      <div className={s.block}>
        <UnfulfilledTick width={30} height={30} />
        <div className={s.taskTitle}>{title}</div>
      </div>
      <div className={s.block}>
        <div className={s.date}>{date}</div>
        <div className={s.time}>{time}</div>
      </div>
    </div>
  );
};
