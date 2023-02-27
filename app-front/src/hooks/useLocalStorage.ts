// DEPENDENCIES
import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const [arrMovies, setArrMovies] = useState(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      return [...initialValue];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(arrMovies));
  }, [key, arrMovies]);

  return [arrMovies, (newValue: []) => setArrMovies(newValue)];
};
