import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

export const Content = styled.form`
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 400px;
  height: 250px;
`;
export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 10px;
  padding: 0;
  border-radius: 24px;
  border: none;
  background-color: #666;
  cursor: pointer;
  p {
    color: #fff;
  }
`;
