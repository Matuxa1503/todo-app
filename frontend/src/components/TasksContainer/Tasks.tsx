import { FC, useState } from 'react';
import { Header } from '../Header/Header';
import { AnimatePresence } from 'framer-motion';
import { Animation } from './Animation';
import { MonthlyPage } from '../../pages/MonthlyPage/MonthlyPage';
import { DailyPage } from '../../pages/DailyPage/DailyPage';
import s from './TasksContainer.module.scss';

export const TasksContainer: FC = () => {
  const [activePage, isActivePage] = useState<'left' | 'right'>('left');

  return (
    <div className={s.wrapper}>
      <div className={s.content} id="content">
        <div className={s.blackout} id="blackout"></div>
        <Header activePage={activePage} isActivePage={isActivePage} />

        <AnimatePresence mode="wait">
          {activePage === 'left' ? (
            <Animation key="left" direction={'left'}>
              <MonthlyPage />
            </Animation>
          ) : (
            <Animation key="right" direction={'right'}>
              <DailyPage />
            </Animation>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
