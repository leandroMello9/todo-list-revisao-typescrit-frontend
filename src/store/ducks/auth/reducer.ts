import { Reducer } from 'redux';
import { AuthState, AuthActionTypes } from './types';

const INITIAL_STATE: AuthState = {
  loading: false,
  data: {
    user: {
      email: '',
      password: '',
    },
    token: '',
  },
  error: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case AuthActionTypes.AUTH_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: {
          user: {
            email: '',
            password: '',
          },
          token: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
