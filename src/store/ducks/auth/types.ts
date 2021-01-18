export enum AuthActionTypes {
  AUTH_REQUEST = '@autenticate/AUTH_REQUEST',
  AUTH_SUCCESS = '@autenticate/AUTH_SUCCESS',
  AUTH_FAILURE = '@autenticate/AUTH_FAILURE',
}

// DataTypes = formato das informações que esta dentro dos reducers
// Reducers
interface User {
  email: string;
  password: string;
}
export interface Auth {
  user: User;
  token: string;
}

// State Type = Tipagem do estado do reducer

export interface AuthState {
  readonly data: Auth;
  readonly loading: boolean;
  readonly error: boolean;
}
