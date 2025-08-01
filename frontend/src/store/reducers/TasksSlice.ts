import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../interfaces/ITask';

interface TasksState {
  tasks: ITask[];
}
// добавить еще поля isLoading, error когда будут запросы к серверу

const initialState: TasksState = {
  tasks: [
    { id: Date.now(), task: 'Сходить в душ и погулять с собакой Рекс', date: '1 Aug-2025', time: '12:00', isCompleted: false },
    { id: Date.now() + 1, task: 'Сходить в магазин', date: '3 May-2025', time: '12:00', isCompleted: false },
    { id: Date.now() + 2, task: 'Купить машину на барахолке у местного чувака', date: '11 Aug-2025', time: '19:00', isCompleted: false },
  ],
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload);
    },
    completedTask(state, action: PayloadAction<{ id: number; isCompleted: boolean }>) {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    updatedTask(state, action: PayloadAction<{ id: number; time: string; task: string }>) {
      const el = state.tasks.find((item) => item.id === action.payload.id);
      console.log(el);
      if (el) {
        el.task = action.payload.task;
        el.time = action.payload.time;
      }
    },
    deletedTask(state, action: PayloadAction<{ id: number }>) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, completedTask, updatedTask, deletedTask } = TasksSlice.actions;
export default TasksSlice.reducer;
