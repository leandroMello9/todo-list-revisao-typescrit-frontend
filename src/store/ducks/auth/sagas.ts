import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';
import { authSuccess, authFailure } from './actions';

export function* auth({ payload }: any) {
  try {
    const response = yield call(api.post, 'session', payload.data.user);
    localStorage.setItem('user', JSON.stringify(response.data.token));

    yield put(authSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao fazer o login, verifique suas credencias!');

    yield put(authFailure());
  }
}
