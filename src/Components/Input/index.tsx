import React, { InputHTMLAttributes, useState } from 'react';

import { Container, Input } from './styles';

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isFocused?: boolean;
  onChangeText: (value: string) => any;
  type: string;
}
const InputComponent: React.FC<InputInterface> = ({
  placeholder,
  label,
  onChangeText,
  type,
}) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  return (
    <Container onFocused={onFocus}>
      <p>{label}</p>
      <Input
        placeholder={placeholder}
        onFocused={onFocus}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onChange={e => onChangeText(e.target.value)}
        type={type}
      />
    </Container>
  );
};

export default InputComponent;
