import { FC } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PRIVATE__ROUTES, PUBLIC__ROUTES } from './Routes';
import { ROUTES_NAMES } from '../constants/routes';

export const AppRouter: FC = () => {
  const user = false; // redux value!

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            {PRIVATE__ROUTES.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={ROUTES_NAMES.ROOT} replace />} />
          </>
        ) : (
          <>
            {PUBLIC__ROUTES.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={ROUTES_NAMES.AUTH} replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
