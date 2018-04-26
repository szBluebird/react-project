/*
 * CharacterSearchPage Messages
 *
 * This contains all the text for the CharacterSearchPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.components.CharacterInfo.header',
    defaultMessage: 'Character',
  },
  characterNotFound: {
    id: 'boilerplate.components.CharacterInfo.characterNotFound',
    defaultMessage: 'No character found with that name. Please try again!',
  },
  characterName: {
    id: 'boilerplate.components.CharacterInfo.characterName',
    defaultMessage: 'Name: {firstname} {name} {lastname}',
  },
  characterProfession: {
    id: 'boilerplate.components.CharacterInfo.characterProfession',
    defaultMessage: 'Profession: {profession}',
  },
  characterLevel: {
    id: 'boilerplate.components.CharacterInfo.characterLevel',
    defaultMessage: 'Level: {level} - {professionName}',
  },
  characterAlienLevel: {
    id: 'boilerplate.components.CharacterInfo.characterAlienLevel',
    defaultMessage: 'Alien Level: {alienLevel} - {alienRankName}',
  },
  characterFaction: {
    id: 'boilerplate.components.CharacterInfo.characterFaction',
    defaultMessage: 'Faction: {faction}',
  },
  characterSex: {
    id: 'boilerplate.components.CharacterInfo.characterSex',
    defaultMessage: 'Sex: {sex}',
  },
  characterBreed: {
    id: 'boilerplate.components.CharacterInfo.characterBreed',
    defaultMessage: 'Breed: {breed}',
  },
  characterPvpRating: {
    id: 'boilerplate.components.CharacterInfo.characterPvpRating',
    defaultMessage: 'PVP Rating: {pvpRating}',
  },
});
