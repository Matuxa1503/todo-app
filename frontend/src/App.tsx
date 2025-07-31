import { FC } from 'react';
import './App.css';
import { Popup } from './components/Popup/Popup';
import { AppRouter } from './routes/AppRouter';

const App: FC = () => {
  return (
    <>
      <AppRouter />
      <Popup />
    </>
  );
};

export default App;
