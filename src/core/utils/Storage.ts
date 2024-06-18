import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (!data || Object.keys(data)?.length === 0) {
      return null;
    }

    return JSON.parse(data);
  } catch (error) {
    console.log('getData ', error);
  }
};

export const storeData = async (key: string, value: {}) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('storeData ', error);
  }
};

export const updateData = async (key: string, value: {}) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (!data || Object.keys(data)?.length === 0) {
      return null;
    }

    const parsedData = JSON.parse(data);
    const updatedData = {
      ...parsedData,
      ...value,
    };
    await AsyncStorage.setItem(key, JSON.stringify(updatedData));
  } catch (error) {
    console.log('updateData ', error);
  }
};

export const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('deleteData ', error);
  }
};
