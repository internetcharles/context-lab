import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { getCharacters } from '../../../services/hey-arnold-api';
import CharacterList from './CharacterList';

jest.mock('../../../services/hey-arnold-api.js');

describe('Characters component', () => {
  it('displays a list of characters', async() => {
    getCharacters.mockResolvedValue([
      { name: 'Arnold', image: 'Arnold.jpg' }
    ]);
    render(
      <CharacterList />
    );

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
