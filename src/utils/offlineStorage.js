import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';
const CHATS_STORAGE_KEY = 'CHATS_STORAGE_KEY';

export const saveTasksToStorage = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Saving tasks to storage failed', e);
  }
};

export const loadTasksFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Loading tasks from storage failed', e);
    return [];
  }
};

export const saveChatsToStorage = async (chats) => {
  try {
    const jsonValue = JSON.stringify(chats);
    await AsyncStorage.setItem(CHATS_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Saving chats to storage failed', e);
  }
};

export const loadChatsFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(CHATS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Loading chats from storage failed', e);
    return [];
  }
};
