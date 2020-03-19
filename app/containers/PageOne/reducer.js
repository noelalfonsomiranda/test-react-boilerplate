import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import { GET_MEMBERS_LIST, RESULT_MEMBERS_LIST } from './constants';
console.log('reducer')
export const initialState = fromJS({
  membersList: [],
  membersListLoading: false,
  membersListSuccess: false,
  membersListError: false
});

const pageOneReducer = handleActions(
  {
    [GET_MEMBERS_LIST]: state =>
      state
        .set('membersListLoading', true)
        .set('membersListSuccess', false)
        .set('membersListError', false),

    [RESULT_MEMBERS_LIST]: {
      next: (state, action) =>
        state
          .set('membersList', fromJS(action.payload))
          .set('membersListLoading', false)
          .set('membersListSuccess', true)
          .set('membersListError', false),
      throw: (state, action) =>
        state
          .set('membersList', fromJS(action.payload))
          .set('membersListLoading', false)
          .set('membersListSuccess', false)
          .set('membersListError', true)
    }
  },
  initialState
)

export default pageOneReducer;
