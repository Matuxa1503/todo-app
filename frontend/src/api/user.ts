import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const createUserDocInDB = async (uid: string) => {
  await addDoc(collection(db, 'users', uid, 'tasks'), {
    // task: '',
    // date: { day: , month: 'Aug', year: 2025 },
    // time: '',
    // isCompleted: false,
  });
};

export const createUserInDB = async (email: string | null, uid: string) => {
  const userDoc = doc(db, 'users', uid);
  await setDoc(userDoc, { email: email, createdAt: new Date().toISOString() });
};
