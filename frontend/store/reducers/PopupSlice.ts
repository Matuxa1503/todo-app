import { ITaskDataPopup } from './../../src/interfaces/ITask';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopupState {
  isOpen: boolean;
  taskData: ITaskDataPopup | null;
  date: string;
  mode: 'create' | 'edit';
}

const initialState: PopupState = {
  isOpen: false,
  taskData: null,
  date: '',
  mode: 'create',
};

export const PopupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopupForCreateTask(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.mode = 'create';
      state.date = action.payload;
    },
    openPopupForEditTask(state, action: PayloadAction<ITaskDataPopup>) {
      state.isOpen = true;
      state.mode = 'edit';
      state.taskData = action.payload;
    },
    closePopup(state) {
      state.isOpen = false;
      state.taskData = null;
      state.date = '';
    },
  },
});

export const { openPopupForCreateTask, openPopupForEditTask, closePopup } = PopupSlice.actions;
export default PopupSlice.reducer;
