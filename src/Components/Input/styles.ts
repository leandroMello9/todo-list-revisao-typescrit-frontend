import styled from 'styled-components';

interface InputProps {
  onFocused?: boolean;
}

export const Container = styled.div<InputProps>`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 5px;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => (props.onFocused ? '#666' : 'black')};
  }
  input {
    &::placeholder {
      color: ${props => (props.onFocused ? '#666' : '#eeec')};
    }
  }
`;

export const Input = styled.input<InputProps>`
  width: 200px;
  height: 35px;
  border-radius: 4px;
  border-style: solid;
  border: none;
  background: #ccc;
  border-width: 0px;
  border-color: ${props => props.onFocused && '#666'};
`;
