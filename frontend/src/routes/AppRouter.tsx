import { FC } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTES } from './Routes';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        {ROUTES.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};
