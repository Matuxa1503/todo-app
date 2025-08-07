import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask, ITaskDeleteArgs } from '../../interfaces/ITask';
import { createDocUserDB, deleteDocUserDB, getDocsUserDB } from '../../../db/firebaseDocs';

export const fetchTasks = createAsyncThunk('task/fetchAll', async (uid: string) => {
  if (!uid) throw new Error('uid doesn"t exist');

  try {
    const docs = await getDocsUserDB(uid);
    if (docs && docs.empty) return [];

    if (docs) {
      const tasks = docs.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return tasks;
    }
  } catch (err) {
    console.error((err as Error).message);
  }
});

export const addTask = createAsyncThunk('task/createTask', async ({ uid, obj }: { uid: string; obj: ITask }) => {
  try {
    const doc = await createDocUserDB(uid, obj);
    if (doc) return { id: doc.id, ...obj };
  } catch (err) {
    console.error((err as Error).message);
  }
});

export const deleteTask = createAsyncThunk('task/deleteTask', async ({ uid, taskId }: ITaskDeleteArgs) => {
  try {
    await deleteDocUserDB({ uid, taskId });
    return { taskId };
  } catch (err) {
    console.error((err as Error).message);
  }
});
