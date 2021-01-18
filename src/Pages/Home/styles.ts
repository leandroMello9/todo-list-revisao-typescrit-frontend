import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-right: 100px;
  @media (max-width: 480px) {
    margin-left: 150px;
  }
  @media (max-width: 768px) {
    margin-left: 150px;
  }
  a {
    text-decoration: none;
    font-family: sans-serif;
    color: #333;
  }
  p {
    width: 200px;
  }
`;
export const LogoContainer = styled.div`
  width: 5%;
`;
export const Logo = styled.img`
  width: 200px;
  height: 150px;
`;

export const ListTodo = styled.div`
  background: red;
  display: flex;
  width: 800px;
  height: 500px;
  align-self: center;
`;
