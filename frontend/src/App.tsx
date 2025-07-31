import { FC } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTES } from './routes/Routes';
import { Popup } from './components/Popup/Popup';

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {ROUTES.map(({ path, component: Component }) => (
            <Route path={path} element={<Component />} />
          ))}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
      <Popup />
    </>
  );
};

export default App;
