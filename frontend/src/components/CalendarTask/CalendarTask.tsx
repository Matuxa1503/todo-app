import { FC, useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarTask.scss';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarTask: FC = () => {
  const [value, setValue] = useState<Value>(new Date());
  console.log(value);

  return (
    <div className="calendar-wrapper">
      <Calendar locale="en-UK" value={value} onChange={setValue} />
    </div>
  );
};
