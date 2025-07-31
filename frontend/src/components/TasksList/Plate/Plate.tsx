import { FC, useEffect } from 'react';
import s from './Plate.module.scss';
import { CircleCheckBig, Pencil, Trash2 } from 'lucide-react';
import { ITask } from '../../../interfaces/ITask';
import { useAppDispatch } from '../../../hooks/redux';
import { completedTask, deletedTask } from '../../../../store/reducers/TasksSlice';
import { openPopupForEditTask } from '../../../../store/reducers/PopupSlice';

interface PlateProps {
  task: ITask;
}

export const Plate: FC<PlateProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(task);
  }, [task]);

  const toggleIcon = () => {
    const data = {
      id: task.id,
      isCompleted: task.isCompleted,
    };

    dispatch(completedTask(data));
  };

  const handleUpdateTask = () => {
    const data = {
      id: task.id,
      time: task.time,
      title: task.task,
      date: task.date,
    };

    dispatch(openPopupForEditTask(data));
  };

  const handleDeleteTask = () => {
    dispatch(deletedTask({ id: task.id }));
  };

  return (
    <div className={`${s.plate} ${task.isCompleted && s.scalePlate}`}>
      <div className={s.block}>
        <CircleCheckBig
          onClick={() => toggleIcon()}
          color={`${task.isCompleted ? '#39c4a5' : '#B1B1B1'}`}
          size={35}
          className={`${s.tick} ${task.isCompleted && s.fulfilledTick}`}
        />
        <p className={`${s.taskTitle} ${task.isCompleted && s.taskTitleCross}`}>{task.task}</p>
      </div>

      <div className={s.block}>
        <div className={`${s.date} ${task.isCompleted && s.blockDateCross}`}>{task.date}</div>
        <div className={`${task.isCompleted && s.blockDateCross}`}>{task.time}</div>
      </div>

      {!task.isCompleted && (
        <div className={s.exitBlock}>
          <button onClick={() => handleUpdateTask()} className={`${s.exitBtn} ${s.editBtn}`}>
            <Pencil className={s.iconBtn} color="#fff" size={27} />
          </button>
          <button onClick={() => handleDeleteTask()} className={`${s.exitBtn} ${s.trashBtn}`}>
            <Trash2 className={s.iconBtn} color="#fff" size={27} />
          </button>
        </div>
      )}
    </div>
  );
};
