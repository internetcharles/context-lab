import React from 'react';
import { useColorToggle } from '../../hooks/colors';

const Header = () => {
  const toggle = useColorToggle();

  return (
    <>
      <h1>HEY ARNOLD</h1>
      <button onClick={toggle}>Change Theme</button>
    </>
  );
};

export default Header;
