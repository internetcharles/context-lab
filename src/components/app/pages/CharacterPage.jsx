import React from 'react';
import { useState } from 'react';
import CharacterList from '../characters/CharacterList';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <CharacterList page={page} />
    </>
  );
};

export default CharacterPage;
