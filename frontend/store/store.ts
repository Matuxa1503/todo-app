import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/TasksSlice';
import popupReducer from './reducers/PopupSlice';

const rootReducer = combineReducers({
  tasksReducer,
  popupReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
