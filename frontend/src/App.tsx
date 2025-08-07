import { FC, useEffect } from 'react';
import './App.css';
import { Popup } from './components/Popup/Popup';
import { AppRouter } from './routes/AppRouter';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { useAppDispatch } from './hooks/redux';
import { addUser } from './store/reducers/UserSlice';
import { fetchTasks } from './store/reducers/ActionCreators';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ isAuth: true, uid: user.uid }));
        dispatch(fetchTasks(user.uid));
      }
    });

    // get all docs user
    // createDocUserDB(user.uid);
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
