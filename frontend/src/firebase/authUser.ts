import { createUserAPI, loginUserAPI } from '../api/auth';
import { createUserInDB } from '../api/user';

export const authUser = async (isRegister: boolean, email: string, password: string) => {
  try {
    if (isRegister) {
      // create user
      const userData = await createUserAPI(email, password);
      createUserInDB(userData.email, userData.uid);
    } else {
      // auth user
      await loginUserAPI(email, password);
    }
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
  }
};
