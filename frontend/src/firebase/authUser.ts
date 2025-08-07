import { createUserInDB } from './../../db/firebaseAuth';
import { createUserAPI, loginUserAPI } from '../api/auth';

export const authUser = async (isRegister: boolean, email: string, password: string) => {
  try {
    if (isRegister) {
      const userData = await createUserAPI(email, password);
      createUserInDB(userData.email, userData.uid);
    } else {
      await loginUserAPI(email, password);
    }
  } catch (err) {
    console.error((err as Error).message);
  }
};
