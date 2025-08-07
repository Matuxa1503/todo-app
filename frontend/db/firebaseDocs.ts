import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../src/firebase/config';
import { ITask } from '../src/interfaces/ITask';

export const createDocUserDB = async (uid: string, obj: ITask) => {
  try {
    return await addDoc(collection(db, 'users', uid, 'tasks'), obj);
  } catch (err) {
    console.error((err as Error).message);
  }
};

export const getDocsUserDB = async (uid: string) => {
  try {
    return await getDocs(collection(db, 'users', uid, 'tasks'));
  } catch (err) {
    console.error((err as Error).message);
  }
};
