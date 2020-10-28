import { useContext } from 'react';
import { ThemePickerContext } from '../context/ThemePickerContext';

export const useColorToggle = () => {
  const themePicker = useContext(ThemePickerContext);
  return themePicker;
};
