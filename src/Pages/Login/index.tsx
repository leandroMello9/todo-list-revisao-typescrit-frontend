import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Slide, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AplicationState } from '../../store';
import { Auth } from '../../store/ducks/auth/types';
import * as AuthActions from '../../store/ducks/auth/actions';
import Input from '../../Components/Input';
import LoadingComponent from '../../Components/Loading/index';
import { Container, Content, Logo, Button } from './styles';

interface DispatchProps {
  authRequest({ user }: Omit<Auth, 'token'>): void;
}
interface StateProps {
  user: Auth;
  loading: boolean;
}
interface OwnProps {}
type Props = StateProps & DispatchProps & OwnProps;
const Login: React.FC<Props | undefined> = ({ authRequest, loading, user }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const authUser = useCallback(async (email: string, password: string) => {
    authRequest({
      user: {
        email,
        password,
      },
    });
  }, []);
  const loadingComponent = loading ? (
    <LoadingComponent color="#fff" type="spin" />
  ) : (
    <p>Entrar</p>
  );
  return (
    <Container>
      <Content
        onSubmit={e => {
          e?.preventDefault();
          authUser(email, password);
        }}
      >
        <Logo src="https://todolist.london/wp-content/uploads/2020/01/To-Do-List-Logo-for-Facebook.jpg" />
        <Input
          placeholder="Digite seu e-mail"
          label="E-mail"
          type="text"
          onChangeText={(value: string) => setEmail(value)}
        />
        <Input
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          onChangeText={(value: string) => setPassword(value)}
        />
        <Button type="submit">{loadingComponent}</Button>
      </Content>
      <ToastContainer transition={Zoom} autoClose={500} />
    </Container>
  );
};

const mapStateToProps = (state: AplicationState) => ({
  user: state.auth.data,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
