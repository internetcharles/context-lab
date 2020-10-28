import { useContext } from 'react';
import { ThemePickerContext } from '../context/ThemePickerContext';

export const useColorToggle = () => {
  const { toggle } = useContext(ThemePickerContext);
  return toggle;
};

export const setStyles = () => {
  const { fgColor, bgColor } = useContext(ThemePickerContext);
  const styles = {
    backgroundColor: `${bgColor}`,
    color: `${fgColor}`
  };
  return styles;
};
