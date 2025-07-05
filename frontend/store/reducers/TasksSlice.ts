import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  tasks: [],
};

export const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<any>) {
      state.tasks.push(action.payload);
    },
  },
});

export const { addNewTask } = TasksSlice.actions;
export default TasksSlice.reducer;
