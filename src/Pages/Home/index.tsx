import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderOptions,
  Logo,
  LogoContainer,
  ListTodo,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src="https://todolist.london/wp-content/uploads/2020/01/To-Do-List-Logo-for-Facebook.jpg" />
        </LogoContainer>
        <HeaderOptions>
          <p>
            <Link to="/">Lista de tarefas</Link>
          </p>
          <p>
            <Link to="/">Nova Tarefa</Link>
          </p>
        </HeaderOptions>
      </Header>
      <ListTodo />
    </Container>
  );
};

export default Home;
