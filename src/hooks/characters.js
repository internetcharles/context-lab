import { useEffect, useState, useContext } from 'react';
import { ThemePickerContext } from '../context/ThemePickerContext';
import { getCharacters } from '../services/hey-arnold-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useColorToggle = () => {
  const { toggle } = useContext(ThemePickerContext);
  return toggle;
};
