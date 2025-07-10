import { ITask } from './../../src/interfaces/ITask';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
  tasks: ITask[];
}
// добавить еще поля isLoading, error когда будут запросы к серверу

const initialState: TasksState = {
  tasks: [
    { id: Date.now(), task: 'Сходить в душ и погулять с собакой Рекс', date: '12 Feb', time: '12:00', isCompleted: false },
    { id: Date.now() + 1, task: 'Сходить в магазин', date: '03 Feb', time: '12:00', isCompleted: false },
    { id: Date.now() + 2, task: 'Купить машину на барахолке у местного чувака', date: '25 Feb', time: '19:00', isCompleted: false },
  ],
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = TasksSlice.actions;
export default TasksSlice.reducer;
