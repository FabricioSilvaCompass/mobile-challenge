import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, Lable, InputBox} from './styles';

interface Props extends TextInputProps {
  lable: string;
}
export default function Input({lable, ...rest}: Props) {
  return (
    <Container>
      <Lable>{lable}</Lable>
      <InputBox {...rest} />
    </Container>
  );
}
