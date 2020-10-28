import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { ThemePickerProvider } from '../../context/ThemePickerContext';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <ThemePickerProvider>
        <App />
      </ThemePickerProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
