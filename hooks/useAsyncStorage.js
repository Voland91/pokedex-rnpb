import AsyncStorage from '@react-native-community/async-storage';
import {useState, useEffect} from 'react';

export const useAsyncStorage = key => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        setStoredData(value);
      } catch (e) {
        console.error(e);
      }
    })();
  });

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Saving Error', e);
    }
  };

  return [storedData, storeData];
};
