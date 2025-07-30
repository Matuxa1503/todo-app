import { FC, useState } from 'react';
import { Header } from '../Header/Header';
import { AnimatePresence } from 'framer-motion';
import { Animation } from './Animation';
import { MonthlyPage } from '../../pages/MonthlyPage/MonthlyPage';
import { DailyPage } from '../../pages/DailyPage/DailyPage';
import s from './TasksContainer.module.scss';
import { animations } from '../../constants/animations';

export const TasksContainer: FC = () => {
  const [activePage, isActivePage] = useState<'left' | 'right'>('left');

  return (
    <div className={s.wrapper}>
      <div className={s.content} id="content">
        <div className={s.blackout} id="blackout"></div>
        <Animation typeAnimation={animations.fadeIn}>
          <Header activePage={activePage} isActivePage={isActivePage} />

          <AnimatePresence mode="wait">
            <Animation typeAnimation={animations.shift} key={activePage} custom={activePage}>
              {activePage === 'left' ? <MonthlyPage /> : <DailyPage />}
            </Animation>
          </AnimatePresence>
        </Animation>
      </div>
    </div>
  );
};
