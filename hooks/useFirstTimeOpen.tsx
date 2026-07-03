import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function useFirstTimeOpen() {
  const [isFirstTime, setIsFirstTime] = useState(true); // TEMP TEST
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkFirstTimeOpen() {
      try {
        const hasOpened = await AsyncStorage.getItem('hasOpened');

        if (hasOpened === null) {
          setIsFirstTime(true);
        } else {
          setIsFirstTime(false);
        }
      } catch (e) {
        console.log('error getting local first time', e);
      } finally {
        setIsLoading(false);
      }
    }

    checkFirstTimeOpen();
  }, []);

  const setOpened = async () => {
    await AsyncStorage.setItem('hasOpened', 'true');
  };

  const resetFirstTime = async () => {
    await AsyncStorage.removeItem('hasOpened');
    setIsFirstTime(true);
  };

  return { isFirstTime, isLoading, setOpened, setIsFirstTime, resetFirstTime };
}
