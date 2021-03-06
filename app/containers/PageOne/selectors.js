import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPageOne = state => state.pageOne || initialState;

const makeSelectMembersList = () =>
  createSelector(selectPageOne, subState =>
    subState.get('membersList')
  )

const makeSelectMembersListLoading = () =>
  createSelector(selectPageOne, subState =>
    subState.get('membersListLoading')
  )

export { 
  makeSelectMembersList,
  makeSelectMembersListLoading
};
