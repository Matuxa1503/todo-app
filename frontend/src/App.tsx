import { FC, useEffect } from 'react';
import './App.css';
import { Popup } from './components/Popup/Popup';
import { AppRouter } from './routes/AppRouter';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

const App: FC = () => {
  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log('user', user);
    //   }
    // });
    // createUserDocInDB()
    // get all docs user
    // const tasksRef = collection(db, 'users', userData.uid, 'tasks');
    // const data = await getDocs(tasksRef);
    // data.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });
  }, []);

  return (
    <>
      <AppRouter />
      <Popup />
    </>
  );
};

export default App;
