import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInputTask } from '../../interfaces/IFormInputTask';
import s from './Popup.module.scss';
import { X } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { addTask } from '../../../store/reducers/TasksSlice';

interface PopupProps {
  date: string;
  setShowPopup: () => void;
}

export const Popup: FC<PopupProps> = ({ date, setShowPopup }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputTask>();
  const onSubmit: SubmitHandler<IFormInputTask> = (data) => sendData(data);

  const sendData = (data: IFormInputTask) => {
    const obj = {
      ...data,
      date,
      isCompleted: false,
      id: Date.now(),
    };
    dispatch(addTask(obj));
    setShowPopup();
  };

  useEffect(() => {
    const blackout = document.getElementById('blackout');
    const content = document.getElementById('content');

    if (blackout && content) {
      blackout.style.display = 'block';
      content.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (blackout && content) {
        blackout.style.display = 'none';
        content.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    };
  }, []);

  return (
    <div className={s.container}>
      <X strokeWidth={3.5} color="#6969d4" size={32} className={s.cross} onClick={setShowPopup} />
      <h1 className={s.date}>{date}</h1>

      <form className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputWrapper}>
          <p className={s.inputName}>Time</p>
          <div className={s.inputBlock}>
            <input className={errors.time && s.borderError} type="time" {...register('time', { required: 'Time is required' })} />
            {errors.time && <p className={s.error}>{errors.time.message}</p>}
          </div>
        </div>
        <div className={s.inputWrapper}>
          <p className={s.inputName}>Task</p>
          <div className={s.inputBlock}>
            <input
              className={errors.task && s.borderError}
              placeholder="Go to shop"
              type="text"
              {...register('task', { required: 'Name task is required' })}
            />
            {errors.task && <p className={s.error}>{errors.task.message}</p>}
          </div>
        </div>
        <div className={s.btnBlock}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
