import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ThemePickerProvider } from './context/ThemePickerContext';

render(
  <ThemePickerProvider>
    <App />
  </ThemePickerProvider>,
  document.getElementById('root')
);
