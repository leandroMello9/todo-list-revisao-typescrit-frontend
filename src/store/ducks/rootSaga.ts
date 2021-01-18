import { all, takeLatest } from 'redux-saga/effects';

import { AuthActionTypes } from './auth/types';

import { auth } from './auth/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(AuthActionTypes.AUTH_REQUEST, auth)]);
}
