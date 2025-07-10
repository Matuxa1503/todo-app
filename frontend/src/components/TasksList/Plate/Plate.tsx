import { FC } from 'react';
import s from './Plate.module.scss';
import { CircleCheckBig, Pencil, Trash2 } from 'lucide-react';

interface PlateProps {
  title: string;
  date: string;
  time: string;
}

export const Plate: FC<PlateProps> = ({ title, date, time }) => {
  return (
    <div className={s.plate}>
      <div className={s.block}>
        <CircleCheckBig color="#B1B1B1" size={35} className={s.unfulfilledTick} />
        <div className={s.taskTitle}>{title}</div>
      </div>

      <div className={s.block}>
        <div className={s.date}>{date}</div>
        <div className={s.time}>{time}</div>
      </div>

      <div className={s.exitBlock}>
        <button className={`${s.exitBtn} ${s.editBtn}`}>
          <Pencil color="#fff" size={27} />
        </button>
        <button className={`${s.exitBtn} ${s.trashBtn}`}>
          <Trash2 color="#fff" size={27} />
        </button>
      </div>
    </div>
  );
};
