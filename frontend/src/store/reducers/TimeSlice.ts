import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimeState {
  year: string;
  month: string;
}

const initialState: TimeState = {
  month: '',
  year: '',
};

export const TimeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    writeDate(state, action: PayloadAction<TimeState>) {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
  },
});

export const { writeDate } = TimeSlice.actions;
export default TimeSlice.reducer;
