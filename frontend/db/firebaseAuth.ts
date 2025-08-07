import { doc, setDoc } from 'firebase/firestore';
import { db } from '../src/firebase/config';

export const createUserInDB = async (email: string | null, uid: string) => {
  const userDoc = doc(db, 'users', uid);
  await setDoc(userDoc, { email: email, createdAt: new Date().toISOString() });
};
