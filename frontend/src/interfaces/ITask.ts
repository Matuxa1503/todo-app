export interface ITask {
  id: number;
  task: string;
  date: string;
  time: string;
  isCompleted: boolean;
}

// for update task
export interface ITaskDataPopup {
  id: number;
  date: string;
  time: string;
  title: string;
}
