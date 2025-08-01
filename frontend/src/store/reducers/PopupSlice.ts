import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskDataPopup } from '../../interfaces/ITask';
import { IDate } from '../../interfaces/IDate';

interface PopupState {
  isOpen: boolean;
  taskData: ITaskDataPopup | null;
  date: IDate | null;
  mode: 'create' | 'edit';
}

const initialState: PopupState = {
  isOpen: false,
  taskData: null,
  date: null,
  mode: 'create',
};

export const PopupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopupForCreateTask(state, action: PayloadAction<IDate | null>) {
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
      state.date = null;
    },
  },
});

export const { openPopupForCreateTask, openPopupForEditTask, closePopup } = PopupSlice.actions;
export default PopupSlice.reducer;
