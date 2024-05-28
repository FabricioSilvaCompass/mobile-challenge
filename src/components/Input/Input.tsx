import React from 'react';
type Props = {
  name: string;
};
import {Container, Lable, InputBox} from './styles';

export default function Input(props: Props) {
  return (
    <Container>
      <Lable>{props.name}</Lable>
      <InputBox placeholder={props.name}></InputBox>
    </Container>
  );
}
