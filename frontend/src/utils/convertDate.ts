import { Value } from '../types/calendar';

export const convertDate = (date: Value): string | undefined => {
  if (!date) return;

  if (!Array.isArray(date)) {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const day = date.getDate();
    return `${day} ${month}-${year}`;
  }
};
