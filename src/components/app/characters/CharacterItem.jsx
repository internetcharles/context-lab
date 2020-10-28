import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <p>{name}</p>
  </figure>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
