import { FC, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { convertDate, getMonthYear } from '../../utils/convertDate';
import { Value } from '../../types/calendar';
import './CalendarTask.scss';
import { useAppDispatch } from '../../hooks/redux';
import { writeDate } from '../../store/reducers/TimeSlice';
import { IDate } from '../../interfaces/IDate';
interface CalendarTaskProps {
  setDate: (date: IDate) => void;
}

export const CalendarTask: FC<CalendarTaskProps> = ({ setDate }) => {
  const [value, setValue] = useState<Value>(new Date());
  const dispatch = useAppDispatch();

  const handleDateChange = ({ action, activeStartDate }: { action: string; activeStartDate: Date | null }) => {
    if (action === 'next' || action === 'prev' || action === 'next2' || action === 'prev2') {
      if (activeStartDate) {
        const date = getMonthYear(activeStartDate);
        dispatch(writeDate(date));
      }
    }
  };

  useEffect(() => {
    // get date when app start
    const date = getMonthYear();
    dispatch(writeDate(date));
  }, []);

  useEffect(() => {
    // get date and write for 'add new Task'
    const date = convertDate(value);
    if (date) {
      setDate(date);
    }
  }, [value, setDate]);

  return (
    <div className="calendar-wrapper">
      <Calendar locale="en-UK" value={value} onChange={setValue} onActiveStartDateChange={handleDateChange} />
    </div>
  );
};
