import { FC } from 'react';
import { IFormInputTask } from '../../interfaces/IFormInputTask';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TaskForm } from './TaskForm';
import { updatedTask } from '../../store/reducers/TasksSlice';
import { closePopup } from '../../store/reducers/PopupSlice';
import { addTask } from '../../store/reducers/ActionCreators';

export const Popup: FC = () => {
  const { isOpen, taskData, date, mode } = useAppSelector((state) => state.popupReducer);
  const { uid } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const sendData = (data: IFormInputTask) => {
    if (mode === 'create' && date) {
      const obj = {
        ...data,
        date,
        isCompleted: false,
      };
      dispatch(addTask({ uid, obj }));
    }

    if (mode === 'edit' && taskData) {
      const obj = {
        ...data,
        id: taskData.id,
      };
      dispatch(updatedTask(obj));
    }

    dispatch(closePopup());
  };

  if (!isOpen) return null;

  if (mode === 'create') return <TaskForm date={date} sendData={sendData} />;
  if (mode === 'edit' && taskData !== null)
    return <TaskForm date={taskData.date} defaultValues={{ time: taskData.time, task: taskData.title }} sendData={sendData} />;
};
