import { Navigate } from 'react-router-dom';
import { ROUTES_NAMES } from '../constants/routes';
import { IRoutes } from '../interfaces/IRoutes';
import { TasksContainer } from '../components/TasksContainer/Tasks';

export const ROUTES: IRoutes[] = [
  { path: ROUTES_NAMES.ROOT, component: () => <Navigate to={'/tasks'} replace /> },
  { path: ROUTES_NAMES.TASKS, component: TasksContainer },
];
