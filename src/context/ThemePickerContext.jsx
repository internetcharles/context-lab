import React, { useState } from 'react';

export const ThemePickerContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemePickerProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('#000000');
  const [fgColor, setFgColor] = useState('#FFFFFF');

  const toggle = () => {
    setBgColor(oldColor => {
      if(oldColor === '#000000') return '#FFFFFF';
      return '#000000';
    });
    setFgColor(oldColor => {
      if(oldColor === '#000000') return '#FFFFFF';
      return '#000000';
    });
  };
  return (
    <ThemePickerContext.Provider value={{ bgColor, fgColor, toggle }}>
      {children}
    </ThemePickerContext.Provider>
  );
};
