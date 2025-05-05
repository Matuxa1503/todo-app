import { FC, useState } from 'react';
import { TasksList } from './TasksList/TasksList';
import { Header } from './Header/Header';
import { CalendarTask } from '../../components/CalendarTask/CalendarTask';
import s from './Tasks.module.scss';
import { AnimatePresence } from 'framer-motion';
import { Animation } from './Animation';

export const Tasks: FC = () => {
  const [active, isActive] = useState<'left' | 'right'>('left');

  const leftContent = (
    <Animation key="left" direction="left">
      <div className={s.panel}>+</div>
      <CalendarTask />
      <TasksList />
    </Animation>
  );

  const rightContent = (
    <Animation key="right" direction={'right'}>
      <h1>Right BLock</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem a optio repellendus cupiditate dolores sed facere fugit,
        repellat voluptate ad debitis fuga animi ex dolore commodi harum culpa deserunt? Eveniet libero autem quae est repudiandae accusamus
        ratione sed cumque velit accusantium. Nobis, voluptatem quam minus cum veniam aliquid officia. Necessitatibus quae mollitia deserunt
        nulla eius alias labore ipsam eligendi!
      </p>
    </Animation>
  );

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Header active={active} isActive={isActive} />

        <AnimatePresence mode="wait">
          {active === 'left' && leftContent}
          {active === 'right' && rightContent}
        </AnimatePresence>
      </div>
    </div>
  );
};
