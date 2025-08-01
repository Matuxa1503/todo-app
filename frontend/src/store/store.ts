import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/TasksSlice';
import popupReducer from './reducers/PopupSlice';
import timeReducer from './reducers/TimeSlice';

const rootReducer = combineReducers({
  tasksReducer,
  popupReducer,
  timeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
