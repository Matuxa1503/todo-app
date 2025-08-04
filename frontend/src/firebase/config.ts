import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZWKvmVMFFR7PVEaSNdLNNDWDYvtFC5pE',
  authDomain: 'todo-app-c024c.firebaseapp.com',
  projectId: 'todo-app-c024c',
  storageBucket: 'todo-app-c024c.firebasestorage.app',
  messagingSenderId: '594726540224',
  appId: '1:594726540224:web:ba1114c48dd3a27f4dee25',
  measurementId: 'G-1DQ7ZJ24YB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
