import { IDate } from './IDate';

export interface ITask {
  id: number;
  task: string;
  date: IDate;
  time: string;
  isCompleted: boolean;
}

// for update task
export interface ITaskDataPopup {
  id: number;
  date: IDate;
  time: string;
  title: string;
}
