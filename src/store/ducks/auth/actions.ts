import { action } from 'typesafe-actions';
import { AuthActionTypes, Auth } from './types';

export const authRequest = (data: Omit<Auth, 'token'>) =>
  action(AuthActionTypes.AUTH_REQUEST, { data });

export const authSuccess = (data: Auth) =>
  action(AuthActionTypes.AUTH_SUCCESS, {
    data,
  });

export const authFailure = () => action(AuthActionTypes.AUTH_FAILURE);
