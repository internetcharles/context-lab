import React from 'react';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../../hooks/characters';
import PropTypes from 'prop-types';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);

  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character._id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = { 
  page: PropTypes.number.isRequired
};

export default CharacterList;
