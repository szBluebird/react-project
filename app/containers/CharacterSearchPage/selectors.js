/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectcharacterSearch = (state) => state.get('characterSearch');

const makeSelectCharacterName = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.get('characterName')
);

const makeSelectLoading = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.get('loading')
);

const makeSelectError = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.get('error')
);

const makeSelectCharacter = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.getIn(['character', 'data'])
);

const makeSelectOrganization = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.getIn(['organization', 'data'])
);

const makeSelectDate = () => createSelector(
  selectcharacterSearch,
  (characterSearchState) => characterSearchState.get('date')
);

export {
  selectcharacterSearch,
  makeSelectCharacterName,
  makeSelectLoading,
  makeSelectError,
  makeSelectCharacter,
  makeSelectOrganization,
  makeSelectDate
};
