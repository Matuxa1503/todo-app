import { FC, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { convertDate } from '../../utils/convertDate';
import { Value } from '../../types/calendar';
import './CalendarTask.scss';
interface CalendarTaskProps {
  setDate: (date: string | undefined) => void;
}

export const CalendarTask: FC<CalendarTaskProps> = ({ setDate }) => {
  const [value, setValue] = useState<Value>(new Date());

  const handleMonthChange = ({ action, activeStartDate }: { action: string; activeStartDate: Date | null }) => {
    if (action === 'next' || action === 'prev' || action === 'next2' || action === 'prev2') {
      if (activeStartDate) {
        const year = activeStartDate.getFullYear();
        const month = activeStartDate.getMonth(); // от 0 до 11
        console.log('Выбранный месяц:', month + 1, 'Год:', year);
        // нужно вернуть месяц и год: August 2025 etc.
      }
    }
  };

  useEffect(() => {
    const date = convertDate(value);
    setDate(date);
  }, [value, setDate]);

  return (
    <div className="calendar-wrapper">
      <Calendar locale="en-UK" value={value} onChange={setValue} onActiveStartDateChange={handleMonthChange} />
    </div>
  );
};
