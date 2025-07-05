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

  useEffect(() => {
    const date = convertDate(value);
    setDate(date);
  }, [value, setDate]);

  return (
    <div className="calendar-wrapper">
      <Calendar locale="en-UK" value={value} onChange={setValue} />
    </div>
  );
};
