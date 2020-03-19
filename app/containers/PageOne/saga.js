import { call, put, fork, all, takeLatest } from 'redux-saga/effects';
import { GET_MEMBERS_LIST } from './constants';
import { resultMembersList } from './actions';

import request from 'utils/request';

export function* getMembersList() {
  try {
    const requestURL = yield call(request, `http://dummy.restapiexample.com/api/v1/employees`, {
      method: 'GET'
    })
    const { data } = requestURL
    const result = yield data
    yield put(resultMembersList(result))
  } catch (error) {
    yield put(resultMembersList(new Error(error)));
  }
}

export function* getMembersListSaga() {
  yield takeLatest(GET_MEMBERS_LIST, getMembersList);
}

// All sagas to be loaded
export function* pageOneSagas() {
  yield all([
    fork(getMembersListSaga)
  ])
}

// All sagas to be loaded
export default pageOneSagas
