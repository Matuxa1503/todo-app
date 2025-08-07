import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export const createUserAPI = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  console.log('Пользователь зарегистрирован:', userCredential);
  return userCredential.user;
};

export const loginUserAPI = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log('Пользователь залогинен:', userCredential);
  return userCredential.user;
};
