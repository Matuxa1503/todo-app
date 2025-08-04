import { ROUTES_NAMES } from '../constants/routes';
import { IRoutes } from '../interfaces/IRoutes';
import { TasksContainer } from '../components/TasksContainer/TasksContainer';
import { AuthForm } from '../components/AuthForm/AuthForm';

export const PUBLIC__ROUTES: IRoutes[] = [{ path: ROUTES_NAMES.AUTH, component: AuthForm }];

export const PRIVATE__ROUTES: IRoutes[] = [{ path: ROUTES_NAMES.ROOT, component: TasksContainer }];
