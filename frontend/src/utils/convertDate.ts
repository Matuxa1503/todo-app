import { Value } from '../types/calendar';

export const convertDate = (date: Value) => {
  if (!date) return;

  if (!Array.isArray(date)) {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const day = date.getDate();
    return { day, month, year };
  }
};

export const getMonthYear = (activeStartDate?: Date | null) => {
  const now = activeStartDate ?? new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year = now.getFullYear().toString();
  return { month, year };
};
