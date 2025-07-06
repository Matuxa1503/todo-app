import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInputTask } from '../../interfaces/IFormInputTask';
import s from './Popup.module.scss';
import { X } from 'lucide-react';

interface PopupProps {
  date: string | undefined;
  setShowPopup: () => void;
}

export const Popup: FC<PopupProps> = ({ date, setShowPopup }) => {
  const { register, handleSubmit } = useForm<IFormInputTask>();
  const onSubmit: SubmitHandler<IFormInputTask> = (data) => console.log(data);

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

      <form className={s.inputWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <p className={s.inputName}>Write time</p>
          <input type="time" {...register('time')} />
        </div>
        <div className={s.inputBlock}>
          <p className={s.inputName}>Write text task</p>
          <input placeholder="Go to shop" type="text" {...(register('task'), { required: true })} />
        </div>
        <div className={s.btnBlock}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
