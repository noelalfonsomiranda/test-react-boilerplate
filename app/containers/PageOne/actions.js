import { createActions } from 'redux-actions'
import { GET_MEMBERS_LIST, RESULT_MEMBERS_LIST } from './constants';

console.log('actions')

const ReduxActions = createActions(
  {},

  GET_MEMBERS_LIST,
  RESULT_MEMBERS_LIST
)

export const {
  getMembersList,
  resultMembersList
} = {
  getMembersList: ReduxActions['app/pageOne/getMembersList'],
  resultMembersList: ReduxActions['app/pageOne/resultMembersList']
}
