import { FC, useState } from 'react';
import { TasksList } from './TasksList/TasksList';
import { Header } from './Header/Header';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './Tasks.module.scss';

export const Tasks: FC = () => {
  const [active, isActive] = useState<'left' | 'right'>('left');
  // АНИМАЦИЮ ДОБАВИТЬ ПРИ ИЗМЕНЕНИИ КОНТЕНТА ДНЯ И КАЛЕНДАРЯ
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Header active={active} isActive={isActive} />

        {active === 'left' && (
          <>
            <div className={s.panel}>+</div>
            <div className={s.calendar}>
              <CalendarTask />
            </div>
            <TasksList />
          </>
        )}

        {active === 'right' && (
          <>
            <h1>Right BLock</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem a optio repellendus cupiditate dolores sed facere
              fugit, repellat voluptate ad debitis fuga animi ex dolore commodi harum culpa deserunt? Eveniet libero autem quae est
              repudiandae accusamus ratione sed cumque velit accusantium. Nobis, voluptatem quam minus cum veniam aliquid officia.
              Necessitatibus quae mollitia deserunt nulla eius alias labore ipsam eligendi!
            </p>
          </>
        )}
      </div>
    </div>
  );
};
